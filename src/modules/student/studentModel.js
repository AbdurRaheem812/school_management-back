import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import User from "../user/userModel.js";
import Class from "../class/classModel.js";

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  roll_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["MALE", "FEMALE", "OTHER"],
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: "id",
    },
  },
},{
  tableName: Students,
  timestamps: true,
});

export default Student;
