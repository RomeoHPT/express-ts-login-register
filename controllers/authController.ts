import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import { AuthUtils } from "../utils/auth"
import { ValidationUtils } from "../utils/validation"
import type { RegisterRequest, LoginRequest, AuthResponse } from "../types/auth"

export class AuthController {
  static async register(req: Request<{}, AuthResponse, RegisterRequest>, res: Response<AuthResponse>): Promise<void> {
    try {
      const { email, password, name } = req.body

      const validationErrors = ValidationUtils.validateRegisterInput(email, password, name)
      if (validationErrors.length > 0) {
        res.status(400).json({
          success: false,
          message: validationErrors.join(", "),
        })
        return
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      })

      if (existingUser) {
        res.status(409).json({
          success: false,
          message: "User with this email already exists",
        })
        return
      }

      const hashedPassword = await AuthUtils.hashPassword(password)

      const user = await prisma.user.create({
        data: {
          email: email.toLowerCase(),
          password: hashedPassword,
          name: name?.trim(),
        },
      })

      const token = AuthUtils.generateToken({
        userId: user.id,
        email: user.email,
      })

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name ?? undefined,
          },
          token,
        },
      })
    } catch (error) {
      console.error("Registration error:", error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
      })
    }
  }

  static async login(req: Request<{}, AuthResponse, LoginRequest>, res: Response<AuthResponse>): Promise<void> {
    try {
      const { email, password } = req.body

      const validationErrors = ValidationUtils.validateLoginInput(email, password)
      if (validationErrors.length > 0) {
        res.status(400).json({
          success: false,
          message: validationErrors.join(", "),
        })
        return
      }

      const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      })

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Invalid email or password",
        })
        return
      }

      // Verify password
      const isPasswordValid = await AuthUtils.comparePassword(password, user.password)
      if (!isPasswordValid) {
        res.status(401).json({
          success: false,
          message: "Invalid email or password",
        })
        return
      }

      // Generate token
      const token = AuthUtils.generateToken({
        userId: user.id,
        email: user.email,
      })

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name ?? undefined,
          },
          token,
        },
      })
    } catch (error) {
      console.error("Login error:", error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
      })
    }
  }

  static async getProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user?.userId

      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      })

      if (!user) {
        res.status(404).json({
          success: false,
          message: "User not found",
        })
        return
      }

      res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        data: { user },
      })
    } catch (error) {
      console.error("Get profile error:", error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
      })
    }
  }
}
