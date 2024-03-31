import { Router } from "express";
import * as MessageController from "./message.controller.js";

const router = Router();

router.get("/", MessageController.getMessage);

export default router;
