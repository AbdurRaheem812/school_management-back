import * as teacherService from "./teacherServices.js";

export const createTeacher = async (req, res)=>{
try{
    const teacher = await teacherService.createTeacher(req.body);
    res.status(201).json({ success: true, data: teacher});
}
catch(err){
    res.status(500).json({ success: false, message: err.message});
}
};

export const getAllTeachers = async (req, res)=>{
try{
    const teacher = await teacherService.getAllTeachers();
    res.status(201).json({ success: true, data: teacher});
}
catch(err){
    res.status(500).json({ success: false, message: err.message});
}
};

export const getTeacherbyId = async (req, res)=>{
    try{
        const teacher = await teacherService.getTeacherById(req.params.id);
        if(!teacher)
            return res.status(404).json({ success: false, message: "Teacher not found"});
        res.status(201).json({ success: true, data: teacher});
    }
    catch(err){
        res.status(500).json({ success: false, message: err.message})
    }
};

export const updateTeacher = async (req, res)=>{
try{
    const teacher = await teacherService.updateTeacher(req.params.id, req.body);
    res.status(201).json({ success: true, data: teacher});
}catch(err){
    res.status(500).json({ success: false, message: err.message})
}
};

export const deleteTeacher = async (req, res)=>{
try{
    const teacher = await teacherService.deleteTeacher(req.params.id);
    res.status(201).json({ success: true, data: teacher});
}catch(err){
    res.status(500).json({ success: false, message: err.message})
}
};