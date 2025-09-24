import express, { Request, Response } from "express";
import { registerSchema, loginSchema } from "../lib/validations";
import authService from "../services/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
async function register(req: Request, res: Response) {
  try {
    // Validate input
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { name, email, password } = req.body;

    const result = await authService.register(email, name, password);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        user: result.user,
        token: result.token,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
async function login(req: Request, res: Response) {
  try {
    // Validate input
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { email, password } = req.body;

    const result = await authService.login(email, password);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message,
      });
    }

    res.status(200).json({
      success: true,
      message: result.message,
      data: {
        user: {
          name: result.data?.user.name,
        },
        token: result.data?.token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

export default router;
