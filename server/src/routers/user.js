import { Router } from 'express'

import { adminAuth } from '../middleware/auth.js'
import { UserLogin, UserRegister, deleteUser, getUser } from '../controllers/user.js'
const router = Router()


router.post("/register",UserRegister)
router.post("/login",UserLogin)
router.delete("/:id", adminAuth,deleteUser)
router.get("/",getUser)



export default router