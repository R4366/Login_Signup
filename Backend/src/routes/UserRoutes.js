import express from 'express';
import { getUserDetails, loginUser, logout, registerUser } from '../controllers/UserController.js';
import authMiddleware from '../Middleware/authMiddleware.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUserDetails", authMiddleware, getUserDetails);
router.post("/logout", logout);

export default router;
