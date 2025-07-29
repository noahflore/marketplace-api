import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import paginationMiddleware from "middleware/paginationMiddleware"
import { ProductSchemaJoi } from "modules/Products/schemas/joi/ProductSchemaJoi"
import ValidationSchema from "middleware/SchemaValidationMiddleware"
import createController from "modules/Products/useCases/create/createController"
import deleteController from "modules/Products/useCases/delete/deleteController"
import findAllController from "modules/Products/useCases/findAll/findAllController"
import findByIdController from "modules/Products/useCases/findById/findByIdController"
import updateController from "modules/Products/useCases/update/updateController"


const productRouters = Router()

productRouters.use(authMiddleware.execute)
productRouters.post("/",ValidationSchema.execute(ProductSchemaJoi), createController.handle)
productRouters.get("/", paginationMiddleware.execute, findAllController.handle)
productRouters.get("/:id", findByIdController.handle)
productRouters.patch("/:id", updateController.handle)
productRouters.delete("/:id", deleteController.handle)

export default productRouters