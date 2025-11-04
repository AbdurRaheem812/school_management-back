import sequelize from "../config/sequelize";
import User from '../modules/user/userModel.js';
import Teacher from '../modules/teacher/teacherModel.js';
import Student from '../modules/student/studentModel.js';
import Class from "../modules/class/classModel.js";
import Subject from "../modules/subject/subjectModel.js";
import Attendence from "../modules/attendance/attendanceModel.js";
import Marks from "../modules/marks/marksModel.js";
import Enrollment from "../modules/enrollment/enrollmentModel.js";

//User-Teacher Relationship
User.hasOne(Teacher, { foreignKey: 'userId', onDelete: 'CASCADE' });
Teacher.belongsTo(User, { foreignKey: 'userId' });

// User-Student Relationship
User.hasOne(Student, { foreignKey: 'userId', onDelete: 'CASCADE' });
Student.belongsTo(User, { foreignKey: 'userId' });

// Class-Teacher Relationship
Teacher.hasMany(Class, { foreignKey: 'teacherId', onDelete: 'SET NULL' });
Class.belongsTo(Teacher, { foreignKey: 'teacherId' });

// Class-Subject Relationship
Class.hasMany(Subject, { foreignKey: 'classId', onDelete: 'CASCADE' });
Subject.belongsTo(Class, { foreignKey: 'classId' });

// Student-Class Relationship through Enrollment
Student.belongsToMany(Class, { through: Enrollment, foreignKey: 'studentId', otherKey: 'classId', onDelete: 'CASCADE' });
Class.belongsToMany(Student, { through: Enrollment, foreignKey: 'classId', otherKey: 'studentId', onDelete: 'CASCADE' });

// Student-Attendence Relationship
Student.hasMany(Attendence, { foreignKey: 'studentId', onDelete: 'CASCADE' });
Attendence.belongsTo(Student, { foreignKey: 'studentId' });

// Subject-Attendence Relationship
Subject.hasMany(Attendence, { foreignKey: 'subjectId', onDelete: 'CASCADE' });
Attendence.belongsTo(Subject, { foreignKey: 'subjectId' });

// Student-Marks Relationship
Student.hasMany(Marks, { foreignKey: 'studentId', onDelete: 'CASCADE' });
Marks.belongsTo(Student, { foreignKey: 'studentId' });

// Subject-Marks Relationship
Subject.hasMany(Marks, { foreignKey: 'subjectId', onDelete: 'CASCADE' });
Marks.belongsTo(Subject, { foreignKey: 'subjectId' });
