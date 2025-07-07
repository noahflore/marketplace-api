import { Router } from "express"
import createController from "modules/Orders/useCases/create/createController"
import authMiddleware from "middleware/authMiddleware"

const orderRouters = Router()

orderRouters.use(authMiddleware.execute)
orderRouters.post("/", createController.handle)

export default orderRouters