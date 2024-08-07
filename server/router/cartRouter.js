import express from "express";
import * as controller from "../controller/cartController.js";

const router = express.Router();

router.post("/", controller.getCarts);
router.post("/add", controller.addCart);
router.post("/update", controller.updateCartItem);
router.delete('/remove', controller.removeCartItem);
router.post('/delete', controller.cartDelete)
router.post('/count',controller.getCartCount)
export default router;
