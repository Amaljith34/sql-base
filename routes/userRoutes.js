import express from 'express'
import { createUser } from '../Controller/UserController.js'
const router=express.Router()

router.post('/create',createUser)

export default router