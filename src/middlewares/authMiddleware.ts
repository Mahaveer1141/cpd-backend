import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/configuration";

export function authenticateRequest(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
    if (!token) throw new Error("Token not found");
    const verifiedUser: any = jwt.verify(
      token,
      config.token.ACCESS_TOKEN_SECRET
    );
    req.userId = verifiedUser.userId;
    next();
  } catch (err) {
    next(err);
  }
}
