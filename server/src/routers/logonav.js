import { Router } from 'express'
import { creatLogoNav, getAllLogoNav } from '../controllers/logonav.js'

const router = Router()


router.get("/",getAllLogoNav)
router.post("/",creatLogoNav)



export default router