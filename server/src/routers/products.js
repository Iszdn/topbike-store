import { Router } from 'express'
import { creatProduct, deleteProduct, getAllProducts, getById } from '../controllers/products.js'

const router = Router()


router.get("/",getAllProducts)
router.post("/",creatProduct)
router.delete("/:id",deleteProduct)
router.get("/:id",getById)



export default router