import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Student from "../student/studentModel.js";
import Subject from "../subject/subjectModel.js";

const Marks = sequelize.define("Marks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true,
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
    allowNull: false,
    references: {
      model: Subject,
      key: "id",
    },
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  exam_type: {
    type: DataTypes.ENUM,
    values: ["MIDTERM", "FINAL", "QUIZ", "ASSIGNMENT"],
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Marks;
