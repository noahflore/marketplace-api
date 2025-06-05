import { Router } from "express";
import authMiddleware from "middleware/authMiddleware";
import paginationMiddleware from "middleware/paginationMiddleware";
import CreateController  from "modules/Users/useCases/create/createController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
import findByIdController from "modules/Users/useCases/findById/findByIdController";
import updateController from "modules/Users/useCases/update/updateController";

const userRouters = Router()

userRouters.post("/", CreateController.handle)
userRouters.use(authMiddleware.execute)
userRouters.get("/", paginationMiddleware.execute, findAllController.handle)
userRouters.get("/:id", findByIdController.handle)
userRouters.patch("/", updateController.handle)


export default userRouters