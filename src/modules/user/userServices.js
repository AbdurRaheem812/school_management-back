import User from "./userModel.js";
import { hashPassword } from "../../utils/bcrypt.js";

export const createUser = async (userData) => {
  if (userData.password) {
    userData.password = await hashPassword(userData.password);
  }
  return await User.create(userData);
};

export const getAllUsers = async () => {
  return await User.findAll({
    attributes: { exclude: ['password'] }
  }); 
}
export const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

export const getUserById = async (id) => {
  return await User.findByPk(id);
};

export const updateUser = async (id, data) => {
  await User.update(data, { where: { id } });
  return await getUserById(id);
};

export const deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};
