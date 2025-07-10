import { Router } from "express"
import createController from "modules/Orders/useCases/create/createController"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import findByIdController from "modules/Orders/useCases/findById/findByIdController"
import findAllController from "modules/Orders/useCases/findAll/findAllController"
import updateReadyController from "modules/Orders/useCases/updateReady/updateReadyController"
import deleteController from "modules/Orders/useCases/delete/deleteController"

const orderRouters = Router()

orderRouters.use(authMiddleware.execute)
orderRouters.post("/", createController.handle)
orderRouters.get("/:id", findByIdController.handle)
orderRouters.get("/", paginationMiddleware.execute, findAllController.handle)
orderRouters.patch("/:id", updateReadyController.handle)
orderRouters.delete("/:id", deleteController.handle)

export default orderRouters