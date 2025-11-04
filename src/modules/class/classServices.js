import Class from "./classModel.js";

export const createClass = async (classData) =>{
    return await Class.create(classData);
};

export const getAllClasses = async () =>{
    return await Class.findAll();
};

export const getClassById = async (id) =>{
    return await Class.findById(id);
};

export const updateClass = async (id, updateData) =>{
    return await Class.update(updateData, {where: {id}});
};

export const deleteClass = async (id) =>{
    return await Class.destroy({where: {id}});
};