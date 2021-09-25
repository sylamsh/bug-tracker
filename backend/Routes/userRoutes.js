import express from 'express'
import { signin, signup, fetchDevs } from '../Controllers/userController.js'
const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/dev', fetchDevs)

export default router;