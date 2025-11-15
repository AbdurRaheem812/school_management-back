import Attendance from "./attendenceModel.js";
import Student from "../student/studentModel.js";
import Subject from "../subject/subjectModel.js";

export const markAttendance = async (data) => {
  return await Attendance.create(data);
};

export const getAttendanceById = async (id) => {
  return await Attendance.findByPk(id, { include: [Student, Subject] });
};

export const getAttendanceByStudent = async (studentId) => {
  return await Attendance.findAll({
    where: { studentId },
    include: [Subject],
  });
};

export const updateAttendance = async (id, data) => {
  await Attendance.update(data, { where: { id } });
  return await Attendance.findByPk(id);
};

export const deleteAttendance = async (id) => {
  return await Attendance.destroy({ where: { id } });
};
