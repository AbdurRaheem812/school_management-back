import Enrollment from './enrollmentModel.js';
import Student from '../student/studentModel.js';
import Class from '../class/classModel.js';

export async function enrollStudent(studentId, classId) {
    const student = await Student.findByPk(studentId);
    if(!student) {
        throw {status: 404, message: 'Student not found'};
    }
    const cls = await Class.findByPk(classId);
    if(!cls) {
        throw {status: 404, message: 'Class not found'};
    }
    const existing = await Enrollment.findOne({ where: { studentId, classId } });
    if(existing) {
        throw {status: 400, message: 'Student is already enrolled in this class'};
    }
    const enrollment = await Enrollment.create({ studentId, classId });
    return enrollment;
}

export async function getEnrollStudents(classId){
    const cls = await Class.findByPk(classId);
    if(!cls) {
        throw {status: 404, message: 'Class not found'};
    }
    const enrollments = await Enrollment.findAll({ where: { classId }, include: [Student] });
    return enrollments.map(enrollment => enrollment.Student);
}

export async function getEnrollStudentsById(enrollmentId){
    const enrollment = await Enrollment.findByPk(enrollmentId, { include: [Student, Class] });
    if(!enrollment) {
        throw {status: 404, message: 'Enrollment not found'};
    }
    return enrollment;
}

export async function updateEnrollments (enrollmentId){
    const enrollment = await Enrollment.findByPk(enrollmentId);
    if(!enrollment) {
        throw {status: 404, message: 'Enrollment not found'};
    }
    enrollment.status = 'confirmed';
    await enrollment.save();
    return enrollment;
}

export async function deleteEnrollments (enrollmentId){
    const enrollment = await Enrollment.findByPk(enrollmentId);
    if(!enrollment) {
        throw {status: 404, message: 'Enrollment not found'};
    }
    await enrollment.destroy();
    return { message: 'Enrollment deleted successfully' };
}