import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    stream: [
      {
        type: String,
      },
    ],

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    courses: [
      {
        type: String,
      },
    ],

    skills: [
      {
        type: String,
      },
    ],

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Career = mongoose.model("Career", careerSchema);

export default Career;