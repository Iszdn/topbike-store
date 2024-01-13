import { Router } from 'express'

import { adminAuth } from '../middleware/auth.js'
import {  userRegister, deleteUser, getUser, userLogin } from '../controllers/user.js'
const router = Router()


router.post("/register",userRegister)
router.post("/login",userLogin)
router.delete("/:id", adminAuth,deleteUser)
router.get("/",getUser)



export default router