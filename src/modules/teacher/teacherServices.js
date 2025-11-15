import Teacher from "./teacherModel.js";

export const createTeacher = async (teacherData) => {
    return await Teacher.create(teacherData);
};

export const getAllTeachers = async ()=>{
    return await Teacher.findAll();
};

export const getTeacherById = async (id)=>{
    return await Teacher.findByPk(id);
}; 

export const updateTeacher = async (id, updateData) => {
    return await Teacher.update(updateData, {where: {id}});
};

export const deleteTeacher = async (id) => {
    return await Teacher.destroy({where:{id}});
}; 