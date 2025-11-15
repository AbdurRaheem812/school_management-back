import { Router } from 'express';
import * as subjectController from './subjectController.js';

const router = Router();

router.post('/', subjectController.createSubject);
router.get('/', subjectController.getSubjects);
router.get('/:id', subjectController.getSubjectById);
router.put('/:id', subjectController.updateSubject);
router.delete('/:id', subjectController.deleteSubject);

export default router;