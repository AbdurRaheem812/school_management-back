import express from "express";
import * as attendenceRoutes from "./attendenceController.js";

const router = express.Router();

router.post("/", attendenceRoutes.createAttendance);
router.get("/:id", attendenceRoutes.getAttendance);
router.get("/student/:studentId", attendenceRoutes.getStudentAttendance);
router.put("/:id", attendenceRoutes.updateAttendanceRecord);
router.delete("/:id", attendenceRoutes.deleteAttendanceRecord);
export default router;
