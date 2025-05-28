import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import type { JwtPayload } from "../types/auth";

export class AuthUtils {
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS || "12");
    return bcrypt.hash(password, saltRounds);
  }

  static async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  static generateToken(payload: JwtPayload): string {
    const secret = process.env.JWT_SECRET;
    
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
    const options = { expiresIn } as any;
    
    return jwt.sign(payload, secret, options);
  }

  static verifyToken(token: string): JwtPayload {
    const secret = process.env.JWT_SECRET;
    
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    return jwt.verify(token, secret) as JwtPayload;
  }
}