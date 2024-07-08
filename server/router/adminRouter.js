import express from 'express';
import * as controller from '../controller/adminController.js';

const router = express.Router();

router.post("/upload", controller.uploadProduct);
router.delete('/delete/:pid', controller.deleteProduct);

export default router;
