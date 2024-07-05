import express from "express";
import * as controller from "../controller/stockController.js";

const router = express.Router();

router.post("/", controller.getStock);
export default router;
