import { Router } from 'express'
import { creatNews, getAllNews } from '../controllers/news.js'

const router = Router()


router.get("/",getAllNews)
router.post("/",creatNews)



export default router