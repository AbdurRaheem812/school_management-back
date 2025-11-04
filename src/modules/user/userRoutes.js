import { Router } from "express";
import * as userController from "./userController.js";

const router = Router();

router.post("/users", userController.registerUser);
router.get("/users/:id", userController.getUser);
router.put("/users/:id", userController.updateUserInfo);
router.delete("/users/:id", userController.deleteUserAccount);

export default router;