import { Router } from "express";
import authRoutes from "../modules/auth/authRoutes.js";
import userRoutes from "../modules/user/userRoutes.js";
import studentRoutes from "../modules/student/studentRoutes.js";
import teacherRoutes from "../modules/teacher/teacherRoutes.js";
import classRoutes from "../modules/class/classRoutes.js";
import enrollmentRoutes from "../modules/enrollment/enrollmentRoutes.js";
import attendenceRoutes from "../modules/attendence/attendenceRoutes.js";
import marksRoutes from "../modules/marks/marksRoutes.js";
import subjectRoutes from "../modules/subject/subjectRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users",userRoutes);
router.use("/teachers",teacherRoutes);
router.use("/students",studentRoutes);
router.use("/class",classRoutes);
router.use("/subjects",subjectRoutes);
router.use("/attendence",attendenceRoutes);
router.use("/enrollment",enrollmentRoutes);
router.use("/marks",marksRoutes); 

export default router;