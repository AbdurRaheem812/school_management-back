import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js"; 
import Student from "../student/studentModel.js";
import Subject from "../subject/subjectModel.js";

const Attendance = sequelize.define("Attendance", {
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
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Subject,
      key: "id",
    },
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("PRESENT", "ABSENT", "EXCUSED"),
    allowNull: false,
  },
  markedBy: { 
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: "attendance", 
  timestamps: true,
});

export default Attendance;
