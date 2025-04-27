import express from 'express';
import { Signup, Login, ForgetPasswordRequest, ForgretPasswordReset } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/forget', ForgetPasswordRequest);
router.get('/reset/:token',ForgretPasswordReset)

export default router;
