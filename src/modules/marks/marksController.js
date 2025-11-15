import { validationResult } from "express-validator";
import * as marksService from "./marksServices.js";

export async function createMark(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const mark = await marksService.addMark(req.body);
    res.status(201).json(mark);
  } catch (err) { next(err); }
}

export async function listMarks(req, res, next) {
  try {
    const filters = {
      student_id: req.query.student_id,
      subject_id: req.query.subject_id,
      exam_type: req.query.exam_type,
    };
    const marks = await marksService.getMarks(filters, { limit: +req.query.limit || 50, offset: +req.query.offset || 0 });
    res.json(marks);
  } catch (err) { next(err); }
}

export async function getMark(req, res, next) {
  try {
    const mark = await marksService.getMarks({ id: req.params.id }, { limit: 1 });
    if (!mark || mark.length === 0) return res.status(404).json({ message: "Not found" });
    res.json(mark[0]);
  } catch (err) { next(err); }
}

export async function updateMarks(req, res, next) {
  try {
    const updated = await marksService.updateMarks(req.params.id, req.body);
    res.json(updated);
  } catch (err) { next(err); }
}

export async function deleteMarks(req, res, next) {
  try {
    await marksService.deleteMarks(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
}
