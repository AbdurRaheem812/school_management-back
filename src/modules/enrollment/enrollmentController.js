import { validationResult } from "express-validator";
import * as enrollmentService from "./enrollmentServices.js";

export async function createEnrollment(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { student_id, class_id, note } = req.body;
    const newEnrollment = await enrollmentService.createEnrollment(
      student_id,
      class_id,
      note
    );
    res.status(201).json(newEnrollment);
  } catch (err) {
    next(err);
  }
}

export async function getAllEnrollments(req, res, next) {
  try {
    const filters = {
      student_id: req.query.student_id,
      class_id: req.query.class_id,
      status: req.query.status,
    };
    const enrollments = await enrollmentService.getEnrollments(filters, {
      limit: +req.query.limit || 50,
      offset: +req.query.offset || 0,
    });
    res.json(enrollments);
  } catch (err) {
    next(err);
  }
}

export async function getEnrollmentById(req, res, next) {
  try {
    const id = req.params.id;
    const [enrollment] = await enrollmentService.getEnrollments(
      { id },
      { limit: 1, offset: 0 }
    );
    if (!enrollment) return res.status(404).json({ message: "Not found" });
    res.json(enrollment);
  } catch (err) {
    next(err);
  }
}

export async function updateEnrollment(req, res, next) {
  try {
    const id = req.params.id;
    const updated = await enrollmentService.updateEnrollment(id, req.body);
    res.json(updated);
  } catch (err) { next(err); }
}

export async function deleteEnrollment(req, res, next) {
  try {
    await enrollmentService.deleteEnrollment(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
}