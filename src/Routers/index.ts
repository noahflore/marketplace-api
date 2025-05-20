import { Router } from "express";
import userRouters from "./Users/userRoutes";
import authRouter from "./Auth/authRouters";

const router = Router()

router.use("/users", userRouters)
router.use("/auth", authRouter)

export default router