import {Router} from "express";
import * as teacherController from "./teacherController.js";

const router = Router();

router.post("/users/teachers", teacherController.createTeacher);
router.get("/users/teachers", teacherController.getAllTeachers);
router.get("/users/teachers/:id", teacherController.getTeacherbyId);
router.put("/users/teachers/:id", teacherController.updateTeacher);
router.delete("/users/teachers/:id", teacherController.deleteTeacher);

export default router;