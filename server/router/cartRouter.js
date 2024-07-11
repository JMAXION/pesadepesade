import express from "express";
import * as controller from "../controller/cartController.js";

const router = express.Router();

router.post("/", controller.getCarts);
router.post('/add',controller.addCart);
router.post('/qtyincrease',controller.qtyIncrease)
router.post('/qtydecrease',controller.qtyDecrease)
export default router;
