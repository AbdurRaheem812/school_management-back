import * as classServices from "./classServices.js"

export const createClass = async (req, res)=>{
    try{
        const classs = await classServices.createClass(req.body);
        res.status(201).json({success: true, data: classs});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
};

export const getAllClasses = async (req, res)=>{
    try{
        const classs = await classServices.getAllClasses();
        res.status(201).json({success: true, data: classs});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
};

export const getClassById = async (req, res)=> {
    try{
        const classs = await classServices.getClassById(req.params.id);
        if(!classs)
            return  res.status(400).json({success: true, message: "Class not found"});
        res.status(201).json({success: true, data: classs});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }    
};

export const updateClass = async (req, res)=>{
    try{
        const classs = await classServices.updateClass(req.body, req.params.id);
        res.status(201).json({success: true, data: classs});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
};

export const deleteClass = async (req, res)=>{
    try{
        const classs = await classServices.deleteClass(req.params.id);
        res.status(201).json({success: true, data: classs});
    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
};