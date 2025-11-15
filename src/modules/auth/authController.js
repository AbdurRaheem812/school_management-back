import * as userService from "../user/userServices.js";
import { comparePassword } from "../../utils/bcrypt.js";
import { generateToken } from "../../utils/jwt.js";
import logger from "../../config/logger.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }
    
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
    
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }
    
    const token = generateToken(user);
    
    logger.info(`User logged in: ${user.email}`);
    
    res.json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    logger.error("Login error:", error);
    next(error);
  }
};