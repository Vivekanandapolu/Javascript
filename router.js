import { Router } from "express";
import userRoutes from "./models/user.routes.js";

const router = new Router();
userRoutes(router);
export default router 