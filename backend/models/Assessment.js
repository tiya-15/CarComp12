import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    answers: [
      {
        category: String,
        value: Number,
      },
    ],

    recommendations: [
      {
        careerId: Number,
        title: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Assessment = mongoose.model(
  "Assessment",
  assessmentSchema
);

export default Assessment;