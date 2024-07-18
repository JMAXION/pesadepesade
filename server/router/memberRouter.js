import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();

router.post("/signup", controller.getSignup);
router.post("/login", controller.getLogin);
router.post("/idCheck", controller.getIdCheck);
router.post("/idfind", controller.getIdFind);
router.post("/passwordfind", controller.getPasswordFind);
router.post("/updatepassword", controller.getUpdatePassword);
/* router.post("/kakaoLogin", controller.getKakaoLogin); */

export default router;
