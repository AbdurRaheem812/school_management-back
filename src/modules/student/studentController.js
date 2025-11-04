import * as studentService from "./studentService.js";

export const createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json({ success: true, data: student });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json({ success: true, data: students });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    if (!student)
      return res.status(404).json({ success: false, message: "Student not found" });
    res.json({ success: true, data: student });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    await studentService.updateStudent(req.params.id, req.body);
    res.json({ success: true, message: "Student updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.json({ success: true, message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
