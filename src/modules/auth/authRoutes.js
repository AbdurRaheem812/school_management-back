import { Router } from "express";
import * as authController from "./authController.js";

const router = Router();

router.post("/login", authController.login);

export default router;