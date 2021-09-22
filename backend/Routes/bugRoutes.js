import express from 'express'
import { getBugs, createBug } from '../Controllers/bugsController.js'
const router = express.Router()

router.get('/', getBugs);
router.post('/', createBug);

export default router;