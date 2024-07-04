import express from "express";
import * as controller from "../controller/stockController.js";

const router = express.Router();

router.post("/", controller.getPress);
export default router;
