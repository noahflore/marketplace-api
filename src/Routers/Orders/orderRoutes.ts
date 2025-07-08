import { Router } from "express"
import createController from "modules/Orders/useCases/create/createController"
import authMiddleware from "middleware/authMiddleware"
import findByIdController from "modules/Orders/useCases/findById/findByIdController"

const orderRouters = Router()

orderRouters.use(authMiddleware.execute)
orderRouters.post("/", createController.handle)
orderRouters.get("/:id", findByIdController.handle)

export default orderRouters