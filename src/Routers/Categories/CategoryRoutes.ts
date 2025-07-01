import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import createController from "modules/Categories/useCases/create/createController"
import findByIdController from "modules/Categories/useCases/findById/findByIdController"

const categoryRouters = Router()

categoryRouters.use(authMiddleware.execute)
categoryRouters.post("/", createController.handle)
categoryRouters.get("/:id", findByIdController.handle)

export default categoryRouters