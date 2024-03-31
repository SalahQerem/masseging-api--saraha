import { Router } from "express";
import * as AuthController from "./auth.controller.js";
import validation from "../../middleware/validation.js";
import { SignupSchema, LoginSchema } from "./auth.validation.js";

const router = Router();

router.post("/register", validation(SignupSchema), AuthController.signup);

router.post("/login", validation(LoginSchema), AuthController.login);

// router.get("/confirmEmail/:token", asyncHandler(Authcontroller.confirmEmail));

export default router;
