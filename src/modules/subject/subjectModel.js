import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Class from "../class/classModel.js";

const Subject = sequelize.define("Subject", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: "id",
    },
  },
},{
  tableName: Subjects,
  timestamps: true,
});

export default Subject;
