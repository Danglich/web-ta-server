import express from 'express';
import { getAll, create, getById } from '../controllers/PostController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);

export default router;
