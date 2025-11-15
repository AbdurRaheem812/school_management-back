import * as attendenceService from "./attendenceServices.js";

export const createAttendance = async (req, res) => {
  try {
    const attendance = await attendenceService.markAttendance(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const attendance = await attendenceService.getAttendanceById(req.params.id);
    if (!attendance) return res.status(404).json({ message: "Attendance not found" });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudentAttendance = async (req, res) => {
  try {
    const attendance = await attendenceService.getAttendanceByStudent(req.params.studentId);
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAttendanceRecord = async (req, res) => {
  try {
    const updated = await attendenceService.updateAttendance(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAttendanceRecord = async (req, res) => {
  try {
    await attendenceService.deleteAttendance(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
