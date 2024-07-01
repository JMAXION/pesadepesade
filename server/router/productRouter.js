import express from 'express';
import * as controller from '../controller/productController.js';

const router = express.Router();

router.post('/', controller.getProduct);
router.post('/all', controller.getProduct);
export default router;