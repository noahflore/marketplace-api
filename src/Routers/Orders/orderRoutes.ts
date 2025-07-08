import { Router } from "express"
import createController from "modules/Orders/useCases/create/createController"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import findByIdController from "modules/Orders/useCases/findById/findByIdController"
import findAllController from "modules/Orders/useCases/findAll/findAllController"

const orderRouters = Router()

orderRouters.use(authMiddleware.execute)
orderRouters.post("/", createController.handle)
orderRouters.get("/:id", findByIdController.handle)
orderRouters.get("/", paginationMiddleware.execute, findAllController.handle)

export default orderRouters