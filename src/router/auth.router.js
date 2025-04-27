import express from 'express';
import { Signup, Login, ForgetPasswordRequest } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/forget', ForgetPasswordRequest);


export default router;
