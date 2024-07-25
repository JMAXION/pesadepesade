import express from "express";
import * as controller from "../controller/mypageController.js";

const router = express.Router();

router.post("/passconfirm", controller.getPassConfirm);
router.post("/userdata", controller.getUserData);
router.post("/deleteuserdata", controller.getDeleteUserData);

export default router;
