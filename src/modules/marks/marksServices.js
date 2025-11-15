import Marks from './marksModel.js';
import Students from '../student/studentModel.js';
import Subjects from '../subject/subjectModel.js';

export async function addMarks(payload){
    const { studentId, subjectId, marks_obtained, total_marks=100, exam_type } = payload;

    const student = await Students.findByPk(studentId);
    if(!student){
        throw {status: 404, message: 'Student not found' };
    }

    const subject = await Subjects.findByPk(subjectId);
    if(!subject){
        throw {status: 404, message: 'Subject not found' };
    }

    const percentage = (marks_obtained / total_marks) * 100;
    const grade = computeGrade(percentage);

    const mark = await Marks.create({
        ...payload,
        grade
    });
    return mark;
}

export async function getMarks(filter={}, {limit=50, offset=0}={}){
    const where = {};
    if(filter.studentId){
        where.studentId = filter.studentId;
    }
    if(filter.subjectId){
        where.subjectId = filter.subjectId;
    }
    if(filter.exam_type){
        where.exam_type = filter.exam_type;
    }

    const rows = await Marks.findAll({
        where,
        limit,
        offset,
        order: [['createdAt', 'DESC']],
        include: ["student", "subject"]
    });
    return rows;
}

export async function updateMarks(id, payload){
    const mark = await Marks.findByPk(id);
    if(!mark){
        throw {status: 404, message: 'Marks record not found' };
    }
    if(payload.marks_obtained !== undefined || payload.total_marks !== undefined){
        const marks_obtained = payload.marks_obtained !== undefined ? payload.marks_obtained : mark.marks_obtained;
        const total_marks = payload.total_marks !== undefined ? payload.total_marks : mark.total_marks;
        const percentage = (marks_obtained / total_marks) * 100;
        payload.grade = computeGrade(percentage);
    }
    await mark.update(payload);
    return mark;
}

export async function deleteMarks(id){
    const mark = await Marks.findByPk(id);
    if(!mark){
        throw {status: 404, message: 'Marks record not found' };
    }
    await mark.destroy();
    return true;
}


function computeGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}