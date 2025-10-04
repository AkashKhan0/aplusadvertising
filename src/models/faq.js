// src/models/faq.js
import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in dev
const FAQ = mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
export default FAQ;
