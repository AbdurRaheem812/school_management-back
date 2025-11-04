import * as attendanceService from "./attendanceService.js";

export const createAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.markAttendance(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.getAttendanceById(req.params.id);
    if (!attendance) return res.status(404).json({ message: "Attendance not found" });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudentAttendance = async (req, res) => {
  try {
    const attendance = await attendanceService.getAttendanceByStudent(req.params.studentId);
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAttendanceRecord = async (req, res) => {
  try {
    const updated = await attendanceService.updateAttendance(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAttendanceRecord = async (req, res) => {
  try {
    await attendanceService.deleteAttendance(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
