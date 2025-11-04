import { Router } from "express";
import * as classController from "./classController.js";

const router = Router();

router.post("/users/class", classController.createClass);
router.get("/users/class", classController.getAllClasses);
router.get("/users/class/:id", classController.getClassById);
router.put("/users/class/:id", classController.updateClass);
router.delete("/users/class/:id", classController.deleteClass);

export default router;