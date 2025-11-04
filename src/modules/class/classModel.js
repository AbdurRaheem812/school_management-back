import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import Teacher from "../teacher/teacherModel.js";

const Class = sequelize.define("Class", {
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
    allowNull: false,
    references: {
      model: Teacher,
      key: "id",
    },
  }
},{
  tableName: Classes,
  timestamps: true,
});

export default Class;
 