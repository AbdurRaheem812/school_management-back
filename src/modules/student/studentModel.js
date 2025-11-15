import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import User from "../user/userModel.js";
import Class from "../class/classModel.js";
import Enrollment from "../enrollment/enrollmentModel.js";
import Attendence from "../attendence/attendenceModel.js";
import Marks from "../marks/marksModel.js";

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    rollNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.ENUM("MALE", "FEMALE", "OTHER"),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "students", 
    timestamps: true,
  }
);

Student.belongsTo(User, { foreignKey: "userId" });

Student.belongsToMany(Class, {
  through: Enrollment,
  foreignKey: "studentId",
  otherKey: "classId",
  onDelete: "CASCADE",
});

Student.hasMany(Attendence, { foreignKey: "studentId", onDelete: "CASCADE" });

Student.hasMany(Enrollment, { foreignKey: "studentId", onDelete: "CASCADE" });

Student.hasMany(Marks, { foreignKey: "studentId", onDelete: "CASCADE" });

export default Student;