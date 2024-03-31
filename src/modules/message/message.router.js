import { Router } from "express";
import * as MessageController from "./message.controller.js";
import auth from "../../middleware/auth.middleware.js";
import { asyncHandler } from "../../utils/errorHandling.js";

const router = Router();

router.get("/", asyncHandler(auth), MessageController.getMessage);
router.post("/:recieverId", MessageController.sendMessage);

export default router;
