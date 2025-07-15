import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import createController from "modules/Carts/useCases/create/createController"
import findAllController from "modules/Carts/useCases/findAll/findAllController"

const cartRouters = Router()

cartRouters.use(authMiddleware.execute)
cartRouters.post("/", createController.handle)
cartRouters.get("/", paginationMiddleware.execute, findAllController.handle)

export default cartRouters