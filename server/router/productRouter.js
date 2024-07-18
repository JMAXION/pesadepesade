import express from "express";
import * as controller from "../controller/productController.js";

const router = express.Router();

router.post("/", controller.getProduct);
router.post("/all", controller.getProduct);
router.get("/detail/:pid", controller.getItem);
router.get("/detail/image/:pid", controller.getDetailImage);
router.post("/gift", controller.getGift);
export default router;
