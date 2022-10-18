import { getByLesson, create, update } from '../controllers/WordController.js';
import express from 'express';

const router = express.Router();

router.get('/:lessonId', getByLesson);
router.post('/', create);
router.put('/:id', update);
export default router;
