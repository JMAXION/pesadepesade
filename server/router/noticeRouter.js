import express from "express";
import * as controller from "../controller/noticeController.js";

const router = express.Router();

router.post("/write", controller.insert);
router.get("/list", controller.list);
router.get("/:nid", controller.detail);
router.post("/updateNhits", controller.updateHits);

export default router;
