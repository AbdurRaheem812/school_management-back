import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Student from "../student/studentModel.js";
import Class from "../class/classModel.js";

const Enrollment = sequelize.define("Enrollment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: "id",
    },
  },
});

export default Enrollment;
