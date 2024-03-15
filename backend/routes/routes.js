import { Router } from "express";
import { get, sell } from "../controllers/controllers.js";

const router = Router();

router.get("/", get);

router.post("/sell", sell);

export default router;
