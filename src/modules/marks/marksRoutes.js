import express from "express";
import * as marksController from "./marksController.js";

const router = express.Router();

router.post("/users/marks", marksController.createMarks);
router.get("/users/marks", marksController.getAllMarks);
router.get("/users/marks/:id", marksController.getMarksById);
router.put("/users/marks/:id", marksController.updateMarks);
router.delete("/users/marks/:id", marksController.deleteMarks);

export default router;
