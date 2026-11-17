import Assessment from "../models/Assessment.js";

export const saveAssessment = async (req, res) => {
  try {
    console.log("========== SAVE ASSESSMENT ==========");
    console.log("BODY:", req.body);
    console.log("USER:", req.user);

    const { answers, recommendations } = req.body;

    const assessment = await Assessment.create({
      user: req.user._id,
      answers,
      recommendations,
    });

    console.log("Assessment Saved:", assessment);

    res.status(201).json({
      message: "Assessment saved successfully",
      assessment,
    });
  } catch (error) {
    console.log("========== ERROR ==========");
    console.error(error);
    console.log("===========================");

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAssessmentHistory = async (req, res) => {
  try {
    const history = await Assessment.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};