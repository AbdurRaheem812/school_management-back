import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import Class from "../class/classModel.js";
import Attendence from "../attendence/attendenceModel.js";
import Marks from "../marks/marksModel.js";

const Subject = sequelize.define(
  "Subject",
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
    code: {
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
    credits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 3,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "subjects", 
    timestamps: true,
  }
);

Subject.belongsTo(Class, { foreignKey: "classId" });

Subject.hasMany(Attendence, { foreignKey: "subjectId", onDelete: "CASCADE" });

Subject.hasMany(Marks, { foreignKey: "subjectId", onDelete: "CASCADE" });

export default Subject;