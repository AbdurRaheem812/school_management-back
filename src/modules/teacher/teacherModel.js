import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import User from "../user/userModel.js";
import Subject from "../subject/subjectModel.js";

const Teacher = sequelize.define("Teacher", {
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
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subject,
      key: "id",
    },
  },
},{
  tableName: Teachers,
  timestamps: true,
});

export default Teacher;
