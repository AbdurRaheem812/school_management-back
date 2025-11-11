import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import User from "../user/userModel.js";
import Class from "../class/classModel.js";

const Teacher = sequelize.define(
  "Teacher",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: User,
        key: "id",
      },
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Years of experience",
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "teachers", // Fixed: Added quotes and lowercase
    timestamps: true,
  }
);

Teacher.belongsTo(User, { foreignKey: "userId" });

Teacher.hasMany(Class, { foreignKey: "teacherId", onDelete: "SET NULL" });

export default Teacher;