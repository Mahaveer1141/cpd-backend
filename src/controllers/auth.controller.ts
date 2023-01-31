import { NextFunction, Request, Response } from "express";
import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";

import config from "../config";
import { generateToken } from "../utils/generateToken";
import { Auth } from "../schemas/auth.schema";
import { createStudent, getOneStudent } from "../services/student.service";

const refreshTokens: string[] = [];

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password, confirmPassword } = req.body;
  try {
    const validatedFormData = Auth.parse({ email, password });
    if (password !== confirmPassword)
      throw new Error("Confirm Passsword does not match password");
    const hashedPassword = await brcypt.hash(validatedFormData.password, 13);
    const fetchedStudent = await getOneStudent({
      email: validatedFormData.email,
    });
    if (fetchedStudent) throw new Error("Email already registered");
    const savedStudent = await createStudent({
      email: validatedFormData.email,
      password: hashedPassword,
    });
    res.json(savedStudent);
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const formData = req.body;
  try {
    const validatedFormData = Auth.parse(formData);
    const student = await getOneStudent({
      email: validatedFormData.email,
    });
    const passwordMatch = await brcypt.compare(
      validatedFormData.password,
      student?.password || ""
    );
    if (!student || !passwordMatch) {
      throw new Error("Email or password is not correct");
    }
    const accessToken = generateToken(
      student._id,
      config.token.ACCESS_TOKEN_SECRET,
      "15m"
    );
    const refreshToken = generateToken(
      student._id,
      config.token.REFRESH_TOKEN_SECRET,
      "1y"
    );
    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
}

export async function token(req: Request, res: Response, next: NextFunction) {
  try {
    const { refreshToken } = req.body;
    if (
      !refreshToken ||
      !refreshTokens.find((item: string) => item === refreshToken)
    )
      throw new Error("refresh token not valid");
    const verified: any = jwt.verify(
      refreshToken,
      config.token.REFRESH_TOKEN_SECRET
    );
    const accessToken = generateToken(
      verified.userId,
      config.token.ACCESS_TOKEN_SECRET,
      "15m"
    );
    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
}
