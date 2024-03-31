import { Router } from "express";
import * as AuthController from "./auth.controller.js";

const router = Router();

router.post("/sign-up", AuthController.signup);

export default router;
