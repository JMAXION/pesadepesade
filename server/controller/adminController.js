import * as repository from "../repository/adminRepository.js";
import path from "path";
import multer from "multer";
import { db } from "../database/database_mysql80.js";

// 저장소 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "mainImage") {
      cb(null, "uploads/mainImage/");
    } else if (file.fieldname === "mainImages") {
      cb(null, "uploads/mainImages/");
    } else if (file.fieldname === "detailImages") {
      cb(null, "uploads/detailImages/");
    }
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// 파일 필터링
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== '.webp') {
    return cb(new Error("Only images are allowed"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).fields([
  { name: "mainImage", maxCount: 1 },
  // { name: "mainImages", maxCount: 10 },
  { name: "detailImages", maxCount: 10 },
]);

export const uploadProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }

    const {
      title,
      detail,
      scentDetail,
      description,
      price,
      categoryId,
      info,
      notice,
    } = req.body;
    const mainImagePath = req.files.mainImage[0].path;
    // const mainImagePaths = req.files.mainImages.map((file, index) => ({
    //   path: file.path,
    //   order: index + 1,
    // }));
    const detailImagePaths = req.files.detailImages.map((file, index) => ({
      path: file.path,
      order: index + 1,
    }));

    try {
      const [result] = await db.execute(
        "INSERT INTO pesade_product (pname, pdetail, pscentdetail, pdesc, pprice, category_id, pinfo, pnotice, pimage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          title,
          detail,
          scentDetail,
          description,
          price,
          categoryId,
          info,
          notice,
          mainImagePath,
        ]
      );

      const pid = result.insertId;

      // for (const { path, order } of mainImagePaths) {
      //   await db.execute(
      //     "INSERT INTO pesade_product_image (pid, img_url, img_type, img_order) VALUES (?, ?, 'main', ?)",
      //     [pid, path, order]
      //   );
      // }

      for (const { path, order } of detailImagePaths) {
        await db.execute(
          "INSERT INTO pesade_product_image (pid, img_url, img_type, img_order) VALUES (?, ?, 'detail', ?)",
          [pid, path, order]
        );
      }

      res.status(200).json({
        success: true,
        mainImagePath,
        // mainImagePaths,
        detailImagePaths,
        productId: pid,
      });
    } catch (dbError) {
      console.error(dbError);
      res.status(500).json({ success: false, message: "Database error" });
    }
  });
};

export const deleteProduct = async (req, res) => {
  const pid = req.params.pid;

  try {
    await repository.deleteProduct(pid);
    res.status(200).json({ success: true, message: "제품 삭제 성공" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ success: false, message: "제품 삭제 실패" });
  }
};
