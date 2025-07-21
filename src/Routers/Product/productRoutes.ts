import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import createController from "modules/Products/useCases/create/createController"
import findAllController from "modules/Products/useCases/findAll/findAllController"


const productRouters = Router()

productRouters.use(authMiddleware.execute)
productRouters.post("/", createController.handle)
productRouters.get("/", paginationMiddleware.execute, findAllController.handle)

export default productRouters