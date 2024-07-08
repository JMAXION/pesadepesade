import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();
/* 
router.post("/login", controller.getLogin); */
router.post("/signup", controller.getSignup);
export default router;
