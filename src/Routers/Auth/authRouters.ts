import { Router } from "express"
import ValidationSchema from "middleware/SchemaValidationMiddleware"
import { AuthSchemaJoi } from "modules/Auth/schema/AuthSchemaJoi"
import signInController from "modules/Auth/useCases/signIn/signInController"

const authRouter = Router()

authRouter.post("/signin",ValidationSchema.execute(AuthSchemaJoi), signInController.handle)

export default authRouter