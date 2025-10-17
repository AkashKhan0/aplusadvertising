import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Template ||
  mongoose.model("Template", TemplateSchema);
