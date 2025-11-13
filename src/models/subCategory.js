// src/models/subCategory.js
import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Cloudinary URL
      required: true,
    },
    buttonText: {
      type: String,
      default: "View Details",
    },
  },
  { timestamps: true }
);

const SubCategory =
  mongoose.models.SubCategory ||
  mongoose.model("SubCategory", SubCategorySchema);

export default SubCategory;
