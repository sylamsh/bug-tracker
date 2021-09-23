import express from 'express'
import { getBugs, createBug, updateBug, deleteBug, resolveBug } from '../Controllers/bugsController.js'
const router = express.Router()

router.get('/', getBugs)
router.post('/', createBug)
router.patch('/:id', updateBug)
router.delete('/:id', deleteBug)
router.patch('/:id/isResolved', resolveBug)

export default router;