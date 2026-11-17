import express from "express";
import {
  testAuth,
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Test Route
router.get("/", testAuth);

// Register API
router.post("/register", registerUser);

// Login API
router.post("/login", loginUser);

router.get("/profile", protect, getProfile);

export default router;