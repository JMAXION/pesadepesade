import express from "express";
import * as controller from "../controller/mypageController.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

router.post("/passconfirm", controller.getPassConfirm);
router.post("/userdata", controller.getUserData);
router.post("/userdata", controller.getUserData);
router.get(
  "/profileupload",
  (req, res, next) => {
    console.log("GET /mypage/profileupload"); // 로그 추가
    next();
  },
  controller.getProfileImage
);

router.post(
  "/upload-profile-image",
  upload.single("profileImage"),
  (req, res, next) => {
    console.log("POST /mypage/upload-profile-image"); // 로그 추가
    next();
  },
  controller.uploadProfileImage
);

export default router;
