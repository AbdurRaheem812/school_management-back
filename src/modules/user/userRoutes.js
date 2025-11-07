import { Router } from "express";
import * as userController from "./userController.js";
import { createUserValidation, updateUserValidation } from "./userValidation.js";
import validate from "../../middlewares/validation.js";
import verifyToken from "../../middlewares/authMiddleware.js";

const router = Router();

// Public routes
router.post(
  "/",
  createUserValidation,
  validate,
  userController.registerUser
);

// Protected routes (require authentication)
router.get("/", verifyToken, userController.getAllUsers);
router.get("/:id", verifyToken, userController.getUser);
router.put(
  "/:id",
  verifyToken,
  updateUserValidation,
  validate,
  userController.updateUserInfo
);
router.delete("/:id", verifyToken, userController.deleteUserAccount);

export default router;