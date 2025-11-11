import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Teacher from "../teacher/teacherModel.js";
import Student from "../student/studentModel.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("ADMIN", "STUDENT", "TEACHER"),
      allowNull: false,
      defaultValue: "STUDENT",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "users", 
    timestamps: true,
  }
);

User.hasOne(Teacher, { foreignKey: "userId", onDelete: "CASCADE" });

User.hasOne(Student, { foreignKey: "userId", onDelete: "CASCADE" });

export default User;