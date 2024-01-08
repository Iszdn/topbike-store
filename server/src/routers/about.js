import { Router } from 'express'
import { createWorker, getWorker } from '../controllers/about.js'

const router = Router()


router.get("/",getWorker)
router.post("/",createWorker)



export default router