import Student from "./studentModel.js";

export const createStudent = async (studentData) => {
  return await Student.create(studentData);
};

export const getAllStudents = async () => {
  return await Student.findAll();
};

export const getStudentById = async (id) => {
  return await Student.findByPk(id);
};

export const updateStudent = async (id, updateData) => {
  return await Student.update(updateData, { where: { id } });
};

export const deleteStudent = async (id) => {
  return await Student.destroy({ where: { id } });
};
