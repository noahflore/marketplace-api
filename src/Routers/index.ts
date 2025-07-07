import { Router } from "express";
import userRouters from "./Users/userRoutes";
import authRouter from "./Auth/authRouters";
import categoryRouters from "./Categories/CategoryRoutes";
import orderRouters from "./Orders/orderRoutes";

const router = Router()

router.use("/users", userRouters)
router.use("/auth", authRouter)
router.use("/categories", categoryRouters)
router.use("/orders", orderRouters)

export default router