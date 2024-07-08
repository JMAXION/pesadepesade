import express from "express";
import * as controller from "../controller/journalController.js";

const router = express.Router();

router.post("/", controller.getJournal);
router.post("/:id", controller.getJournalbyId);
export default router;
