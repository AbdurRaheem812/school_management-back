import express from "express";
import * as attendanceRoutes from "./attendanceController.js";

const router = express.Router();

router.post("/", attendanceRoutes.createAttendance);
router.get("/:id", attendanceRoutes.getAttendance);
router.get("/student/:studentId", attendanceRoutes.getStudentAttendance);
router.put("/:id", attendanceRoutes.updateAttendanceRecord);
router.delete("/:id", attendanceRoutes.deleteAttendanceRecord);

export default router;
