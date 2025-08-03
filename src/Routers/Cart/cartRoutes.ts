import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import { CartSchemaJoi } from "modules/Carts/schemas/joi/CartSchemaJoi"
import ValidationSchema from "middleware/SchemaValidationMiddleware"
import createController from "modules/Carts/useCases/create/createController"
import deleteController from "modules/Carts/useCases/delete/deleteController"
import findAllController from "modules/Carts/useCases/findAll/findAllController"
import findByIdController from "modules/Carts/useCases/findById/findByIdController"
import updateAndAddController from "modules/Carts/useCases/updateAndAdd/updateAndAddController"
import updateAndRemoveController from "modules/Carts/useCases/updateAndRemove/updateAndRemoveController"

const cartRouters = Router()

cartRouters.use(authMiddleware.execute)
cartRouters.post("/",ValidationSchema.execute(CartSchemaJoi), createController.handle)
cartRouters.get("/", paginationMiddleware.execute, findAllController.handle)
cartRouters.get("/:id", findByIdController.handle)
cartRouters.patch("/update-add/:id", updateAndAddController.handle)
cartRouters.delete("/update-remove/:id", updateAndRemoveController.handle)
cartRouters.delete("/:id", deleteController.handle)

export default cartRouters