import express from "express";
import {
  saveAssessment,
  getAssessmentHistory,
} from "../controllers/assessmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, saveAssessment);

router.get("/history", protect, getAssessmentHistory);

export default router;