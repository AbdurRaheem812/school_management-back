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
  enrolled_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status:{
    type: DataTypes.ENUM("active","withdraw","completed"),
    allowNull: false,
    defaultValue: "active",
  },
  note: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
},{
  tableName: "enrollment",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
});

Enrollment.belongsTo(Student, { foreignKey: "studentId" });

Enrollment.belongsTo(Class, { foreignKey: "classId" });

Student.hasMany(Enrollment, { foreignKey: "studentId", onDelete: "CASCADE" });
Class.hasMany(Enrollment, { foreignKey: "classId", onDelete: "CASCADE" });

export default Enrollment;