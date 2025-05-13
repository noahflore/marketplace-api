import { Router } from "express";
import CreateController  from "modules/Users/useCases/create/createController";

const userRouters = Router()

userRouters.post("/", CreateController.handle)

export default userRouters