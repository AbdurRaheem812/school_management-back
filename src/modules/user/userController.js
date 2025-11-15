import * as userService from "./userServices.js";
import logger from "../../config/logger.js";

export const registerUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    logger.error("Error registering user:", error);
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    logger.error("Error fetching user:", error);
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    logger.error("Error fetching users:", error);
    next(error);
  }
};

export const updateUserInfo = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    logger.error("Error updating user:", error);
    next(error);
  }
};

export const deleteUserAccount = async (req, res, next) => {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    logger.error("Error deleting user:", error);
    next(error);
  }
};