import * as subjectService from './subjectService.js';
import { sendResponse } from '../../utils/responseHandler.js';

export const setSubject = async (req, res) => {
    try {
        const subjectData = req.body;
        const newSubject = await subjectService.setSubject(subjectData);
        return sendResponse(res, 201, true, newSubject, null, 'Subject created successfully');
    } catch (error) {
        return sendResponse(res, 500, false, null, error.message, 'Failed to create subject');
    }
};

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await subjectService.getAllSubjects();
        return sendResponse(res, 200, true, subjects, null, 'Subjects retrieved successfully');
    } catch (error) {
        return sendResponse(res, 500, false, null, error.message, 'Failed to retrieve subjects');
    }
};

export const getSubjectById = async (req, res) => {
    try {
        const subjectId = req.params.id;
        const subject = await subjectService.getSubjectById(subjectId);
        if (!subject) {
            return sendResponse(res, 404, false, null, 'Subject not found', 'No subject found with the given ID');
        }
        return sendResponse(res, 200, true, subject, null, 'Subject retrieved successfully');
    } catch (error) {
        return sendResponse(res, 500, false, null, error.message, 'Failed to retrieve subject');
    }
};

export const updateSubject = async (req, res) => {
    try {
        const subjectId = req.params.id;
        const updateData = req.body;
        const updatedSubject = await subjectService.updateSubject(subjectId, updateData);
        if (!updatedSubject) {
            return sendResponse(res, 404, false, null, 'Subject not found', 'No subject found with the given ID');
        }
        return sendResponse(res, 200, true, updatedSubject, null, 'Subject updated successfully');
    } catch (error) {
        return sendResponse(res, 500, false, null, error.message, 'Failed to update subject');
    }
};

export const deleteSubject = async (req, res) => {
    try {
        const subjectId = req.params.id;
        const deletedSubject = await subjectService.deleteSubject(subjectId);
        if (!deletedSubject) {
            return sendResponse(res, 404, false, null, 'Subject not found', 'No subject found with the given ID');
        }
        return sendResponse(res, 200, true, deletedSubject, null, 'Subject deleted successfully');
    } catch (error) {
        return sendResponse(res, 500, false, null, error.message, 'Failed to delete subject');
    }
};