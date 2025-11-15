import Subject from './subjectModel.js';

export const setSubject = async (subjectData) => {
    try {
        const newSubject = await Subject.create(subjectData);
        return newSubject;
    } catch (error) {
        throw new Error('Failed to create subject');
    }
}

export const getAllSubjects = async () => {
    try {
        const subjects = await Subject.findAll();
        return subjects;
    } catch (error) {
        throw new Error('Failed to fetch subjects');
    }
}

export const getSubjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await Subject.findByPk(id);
        if (subject) {
            res.status(200).json(subject);
        } else {
            res.status(404).json({ error: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch subject' });
    }
}

export const updateSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, code } = req.body;
        const subject = await Subject.findByPk(id);
        if (subject) {
            subject.name = name;
            subject.code = code;
            await subject.save();
            res.status(200).json(subject);
        } else {
            res.status(404).json({ error: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update subject' });
    }
}

export const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const subject = await Subject.findByPk(id);
        if (subject) {
            await subject.destroy();
            res.status(200).json({ message: 'Subject deleted successfully' });
        } else {
            res.status(404).json({ error: 'Subject not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete subject' });
    }
}

