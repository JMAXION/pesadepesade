import express from "express";
import { db } from "../database/database_mysql80.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM pesade_category");
    res.status(200).json(rows);
  } catch (error) {
    console.error("카테고리 데이터를 로드하는 중 오류 발생:", error);
    res.status(500).json({ message: "카테고리 데이터를 로드하는 중 오류가 발생했습니다." });
  }
});

export default router;
