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
  exam_type: {
    type: DataTypes.ENUM,
    values: ["MIDTERM", "FINAL", "QUIZ", "ASSIGNMENT"],
    allowNull: false,
  },
  marks_obtained: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_marks: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 100, 
  },
  grade: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
},{
  tableName: "marks",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

Marks.belongsTo(Student, { foreignKey: "studentId" });

Marks.belongsTo(Subject, { foreignKey: "subjectId" });

Student.hasMany(Marks, { foreignKey: "studentId", onDelete: "CASCADE" });
Subject.hasMany(Marks, { foreignKey: "subjectId", onDelete: "CASCADE" });

export default Marks;