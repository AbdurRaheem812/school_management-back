import {Router} from "express";
import * as studentController from "./studentController.js";

const router = Router();

router.post("/users/students", studentController.createStudent);
router.get("/users/students", studentController.getAllStudents);
router.get("/users/students/:id", studentController.getStudentById);
router.put("/users/students/:id", studentController.updateStudent);
router.delete("/users/students/:id", studentController.deleteStudent);

export default router;