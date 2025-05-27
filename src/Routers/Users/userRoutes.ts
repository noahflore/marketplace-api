import { Router } from "express";
import paginationMiddleware from "middleware/paginationMiddleware";
import CreateController  from "modules/Users/useCases/create/createController";
import findAllController from "modules/Users/useCases/findAll/findAllController";

const userRouters = Router()

userRouters.post("/", CreateController.handle)
userRouters.get("/", paginationMiddleware.execute, findAllController.handle)

export default userRouters