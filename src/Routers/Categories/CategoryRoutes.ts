import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import { CategorySchemaJoi } from "modules/Categories/schemas/joi/CategorySchemaJoi"
import ValidationSchema from "middleware/SchemaValidationMiddleware"
import createController from "modules/Categories/useCases/create/createController"
import deleteController from "modules/Categories/useCases/delete/deleteController"
import findAllController from "modules/Categories/useCases/findAll/findAllController"
import findByIdController from "modules/Categories/useCases/findById/findByIdController"
import updateController from "modules/Categories/useCases/update/updateController"

const categoryRouters = Router()

categoryRouters.use(authMiddleware.execute)
categoryRouters.post("/", ValidationSchema.execute(CategorySchemaJoi), createController.handle)
categoryRouters.get("/", paginationMiddleware.execute, findAllController.handle)
categoryRouters.get("/:id", findByIdController.handle)
categoryRouters.patch("/:id", updateController.handle)
categoryRouters.delete("/:id", deleteController.handle)

export default categoryRouters