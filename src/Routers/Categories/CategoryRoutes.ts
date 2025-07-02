import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import createController from "modules/Categories/useCases/create/createController"
import findAllController from "modules/Categories/useCases/findAll/findAllController"
import findByIdController from "modules/Categories/useCases/findById/findByIdController"

const categoryRouters = Router()

categoryRouters.use(authMiddleware.execute)
categoryRouters.post("/", createController.handle)
categoryRouters.get("/", paginationMiddleware.execute, findAllController.handle)
categoryRouters.get("/:id", findByIdController.handle)

export default categoryRouters