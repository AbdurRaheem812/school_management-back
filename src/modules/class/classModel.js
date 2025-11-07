import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Teacher from "../teacher/teacherModel.js";

const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Teacher,
        key: "id",
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30,
    },
    academicYear: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "classes", 
    timestamps: true,
  }
);

export default Class;