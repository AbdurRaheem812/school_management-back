import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Student from "../student/studentModel.js";
import Subject from "../subject/subjectModel.js";

const Attendence = sequelize.define(
  "Attendence",
  {
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
      type: DataTypes.ENUM("PRESENT", "ABSENT", "EXCUSED", "LATE"),
      allowNull: false,
    },
    markedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Teacher ID who marked attendance",
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "attendance", 
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["studentId", "subjectId", "date"],
      },
    ],
  }
);

Attendence.belongsTo(Student, { foreignKey: "studentId" });

Attendence.belongsTo(Subject, { foreignKey: "subjectId" });

Student.hasMany(Attendence, { foreignKey: "studentId", onDelete: "CASCADE" });
Subject.hasMany(Attendence, { foreignKey: "subjectId", onDelete: "CASCADE" });

export default Attendence;