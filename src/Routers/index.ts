import { Router } from "express";
import userRouters from "./Users/userRoutes";
import authRouter from "./Auth/authRouters";
import categoryRouters from "./Categories/CategoryRoutes";

const router = Router()

router.use("/users", userRouters)
router.use("/auth", authRouter)
router.use("/categories", categoryRouters)

export default router