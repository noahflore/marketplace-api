import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import createController from "modules/Carts/useCases/create/createController"

const cartRouters = Router()

cartRouters.use(authMiddleware.execute)
cartRouters.post("/", createController.handle)

export default cartRouters