import {
    getAll,
    create,
    update,
    getById,
} from '../controllers/LessonController.js';
import express from 'express';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);

export default router;
