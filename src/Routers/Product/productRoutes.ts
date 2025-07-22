import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import createController from "modules/Products/useCases/create/createController"
import findAllController from "modules/Products/useCases/findAll/findAllController"
import findByIdController from "modules/Products/useCases/findById/findByIdController"


const productRouters = Router()

productRouters.use(authMiddleware.execute)
productRouters.post("/", createController.handle)
productRouters.get("/", paginationMiddleware.execute, findAllController.handle)
productRouters.get("/:id", findByIdController.handle)

export default productRouters