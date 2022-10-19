import {
    getByLesson,
    create,
    update,
    getAll,
} from '../controllers/WordController.js';
import express from 'express';

const router = express.Router();

router.get('/', getAll);
router.get('/:lessonId', getByLesson);
router.post('/', create);
router.put('/:id', update);
export default router;
