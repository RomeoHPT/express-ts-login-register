import type { Request, Response, NextFunction } from "express";
import { AuthUtils } from "../utils/auth";
import type { JwtPayload } from "../types/auth";

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; 

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Access token is required",
    });
    return;
  }

  try {
    const decoded = AuthUtils.verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
