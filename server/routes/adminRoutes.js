import express from 'express';
import { admminLogin } from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.post("/login", admminLogin);

export default adminRouter;