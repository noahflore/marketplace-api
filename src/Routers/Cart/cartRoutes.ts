import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import { CartSchemaJoi } from "modules/Carts/schemas/joi/CartSchemaJoi"
import ValidationSchema from "middleware/SchemaValidationMiddleware"
import createController from "modules/Carts/useCases/create/createController"
import deleteController from "modules/Carts/useCases/delete/deleteController"
import findAllController from "modules/Carts/useCases/findAll/findAllController"
import findByIdController from "modules/Carts/useCases/findById/findByIdController"
import updateController from "modules/Carts/useCases/updateAndAdd/updateAndAddController"

const cartRouters = Router()

cartRouters.use(authMiddleware.execute)
cartRouters.post("/",ValidationSchema.execute(CartSchemaJoi), createController.handle)
cartRouters.get("/", paginationMiddleware.execute, findAllController.handle)
cartRouters.get("/:id", findByIdController.handle)
cartRouters.patch("/:id", updateController.handle)
cartRouters.delete("/:id", deleteController.handle)

export default cartRouters