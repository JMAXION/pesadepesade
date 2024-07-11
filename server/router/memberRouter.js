import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();

router.post("/signup", controller.getSignup);
router.post("/login", controller.getLogin);
router.post("/idCheck", controller.getIdCheck);

export default router;
