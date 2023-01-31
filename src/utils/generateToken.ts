import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export function generateToken(
  userId: mongoose.Types.ObjectId,
  SECRET_KEY: string,
  expiresIn: string
) {
  return jwt.sign({ userId }, SECRET_KEY, {
    expiresIn,
  });
}
