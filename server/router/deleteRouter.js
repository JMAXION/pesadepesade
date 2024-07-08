import express from 'express';
import * as controller from '../controller/deleteController.js';

const router = express.Router();

router.delete('/:pid', controller.deleteProduct);

export default router;
