import { Router } from "express";
import authMiddleware from "middleware/authMiddleware";
import paginationMiddleware from "middleware/paginationMiddleware";
import addAddressController from "modules/Users/useCases/addAddress/addAddressController";
import addFavProductController from "modules/Users/useCases/addFavProduct/addFavProductController";
import CreateController  from "modules/Users/useCases/create/createController";
import deleteController from "modules/Users/useCases/delete/deleteController";
import findAllController from "modules/Users/useCases/findAll/findAllController";
import findByIdController from "modules/Users/useCases/findById/findByIdController";
import removeAddressController from "modules/Users/useCases/removeAddress/removeAddressController";
import updateController from "modules/Users/useCases/update/updateController";

const userRouters = Router()

userRouters.post("/", CreateController.handle)
userRouters.use(authMiddleware.execute)
userRouters.get("/", paginationMiddleware.execute, findAllController.handle)
userRouters.get("/:id", findByIdController.handle)
userRouters.patch("/", updateController.handle)
userRouters.delete("/", deleteController.handle)
userRouters.post("/:add-address", addAddressController.handle)
userRouters.delete("/remove-address/:idAddress", removeAddressController.handle)
userRouters.post("/:add-favorite-product/:productId", addFavProductController.handle)

export default userRouters