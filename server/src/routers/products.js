import { Router } from 'express'
import { creatProduct, deleteProduct, getAllProducts } from '../controllers/products.js'

const router = Router()


router.get("/",getAllProducts)
router.post("/",creatProduct)
router.delete("/:id",deleteProduct)



export default router