import express from "express";
import * as enrollmentController from "./enrollmentController.js";

const router = express.Router();

router.post("/users/enrollment", enrollmentController.createEnrollment);
router.get("/users/enrollment", enrollmentController.getAllEnrollments);
router.get("/users/enrollment/:id", enrollmentController.getEnrollmentById);
router.put("/users/enrollment/:id", enrollmentController.updateEnrollment);
router.delete("/users/enrollment/:id", enrollmentController.deleteEnrollment);

export default router;
