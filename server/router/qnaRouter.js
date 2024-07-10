import express from "express";
import * as controller from "../controller/qnaController.js";

const router = express.Router();

router.post("/new", controller.insert);
router.get("/list", controller.list);
router.get("/:qid", controller.detail);
router.get("/:qid/next", controller.getNext);
router.get("/:qid/prev", controller.getPrev);
router.post("/checkPassword", controller.checkPassword);
router.post("/updateQhits", controller.updateHits);
router.post("/comments", controller.addComment);
router.get("/comments/:qid", controller.getComments);
router.delete("/comments/:commentId", controller.deleteComment);

export default router;
