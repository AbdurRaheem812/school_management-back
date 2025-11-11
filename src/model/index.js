import sequelize from "../config/database.js";
import User from "../modules/user/userModel.js";
import Teacher from "../modules/teacher/teacherModel.js";
import Student from "../modules/student/studentModel.js";
import Class from "../modules/class/classModel.js";
import Subject from "../modules/subject/subjectModel.js";
import Attendence from "../modules/attendance/attendanceModel.js";
import Marks from "../modules/marks/marksModel.js";
import Enrollment from "../modules/enrollment/enrollmentModel.js";

User.hasOne(Teacher, { foreignKey: "userId", onDelete: "CASCADE" });
Teacher.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Student, { foreignKey: "userId", onDelete: "CASCADE" });
Student.belongsTo(User, { foreignKey: "userId" });

Teacher.hasMany(Class, { foreignKey: "teacherId", onDelete: "SET NULL" });
Class.belongsTo(Teacher, { foreignKey: "teacherId" });

Class.hasMany(Subject, { foreignKey: "classId", onDelete: "CASCADE" });
Subject.belongsTo(Class, { foreignKey: "classId" });

Student.belongsToMany(Class, {
  through: Enrollment,
  foreignKey: "studentId",
  otherKey: "classId",
  onDelete: "CASCADE",
});
Class.belongsToMany(Student, {
  through: Enrollment,
  foreignKey: "classId",
  otherKey: "studentId",
  onDelete: "CASCADE",
});

Student.hasMany(Attendence, { foreignKey: "studentId", onDelete: "CASCADE" });
Attendence.belongsTo(Student, { foreignKey: "studentId" });

Subject.hasMany(Attendence, { foreignKey: "subjectId", onDelete: "CASCADE" });
Attendence.belongsTo(Subject, { foreignKey: "subjectId" });

Student.hasMany(Marks, { foreignKey: "studentId", onDelete: "CASCADE" });
Marks.belongsTo(Student, { foreignKey: "studentId" });

Subject.hasMany(Marks, { foreignKey: "subjectId", onDelete: "CASCADE" });
Marks.belongsTo(Subject, { foreignKey: "subjectId" });

Class.hasMany(Enrollment, { foreignKey: "classId", onDelete: "CASCADE" });
Enrollment.belongsTo(Class, { foreignKey: "classId" });

Student.hasMany(Enrollment, { foreignKey: "studentId", onDelete: "CASCADE" });
Enrollment.belongsTo(Student, { foreignKey: "studentId" });

Subject.hasMany(Marks, { foreignKey: "subjectId", onDelete: "CASCADE" });
Student.hasMany(Marks, { foreignKey: "studentId", onDelete: "CASCADE" });
Marks.belongsTo(Subject, { foreignKey: "subjectId" });
Marks.belongsTo(Student, { foreignKey: "studentId" });
