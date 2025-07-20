import { Router } from "express"
import authMiddleware from "middleware/authMiddleware"
import createController from "modules/Products/useCases/create/createController"


const productRouters = Router()

productRouters.use(authMiddleware.execute)
productRouters.post("/", createController.handle)

export default productRouters