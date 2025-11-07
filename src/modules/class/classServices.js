import Class from "./classModel.js";
import Teacher from "../teacher/teacherModel.js";
import User from "../user/userModel.js";
import logger from "../../config/logger.js";

export const createClass = async (classData) => {
  try {
    const classInstance = await Class.create(classData);
    logger.info(`Class created: ${classInstance.name}-${classInstance.section}`);
    return classInstance;
  } catch (error) {
    logger.error("Error creating class:", error);
    throw error;
  }
};

export const getAllClasses = async () => {
  return await Class.findAll({
    include: [
      {
        model: Teacher,
        include: [
          {
            model: User,
            attributes: ["id", "username", "email"],
          },
        ],
      },
    ],
  });
};

export const getClassById = async (id) => {
  // Fixed: Changed from findById to findByPk
  return await Class.findByPk(id, {
    include: [
      {
        model: Teacher,
        include: [
          {
            model: User,
            attributes: ["id", "username", "email"],
          },
        ],
      },
    ],
  });
};

export const updateClass = async (id, updateData) => {
  const [updated] = await Class.update(updateData, { where: { id } });
  if (updated) {
    logger.info(`Class updated: ${id}`);
    return await getClassById(id);
  }
  return null;
};

export const deleteClass = async (id) => {
  const deleted = await Class.destroy({ where: { id } });
  if (deleted) {
    logger.info(`Class deleted: ${id}`);
  }
  return deleted;
};