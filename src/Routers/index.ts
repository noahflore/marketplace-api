import { Router } from "express";
import userRouters from "./Users/userRoutes";

const router = Router()

router.use("/users", userRouters)

export default router