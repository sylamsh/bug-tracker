import express from 'express'
import { getBugs, createBug, updateBug, deleteBug, resolveBug, devRespond } from '../Controllers/bugsController.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.get('/', getBugs)
router.post('/', auth, createBug)
router.patch('/:id', auth, updateBug)
router.delete('/:id', auth, deleteBug)
router.patch('/:id/isResolved', auth, resolveBug)
router.patch('/:id/devRespond', auth, devRespond)

export default router;