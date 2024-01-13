import { Router } from 'express'
import { creatLogoBlack, getAllLogoBlack } from '../controllers/logofooter.js'

const router = Router()


router.get("/",getAllLogoBlack)
router.post("/",creatLogoBlack)



export default router