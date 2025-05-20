import { Router } from "express"
import signInController from "modules/Auth/useCases/signIn/signInController"

const authRouter = Router()

authRouter.post("/signin", signInController.handle)

export default authRouter