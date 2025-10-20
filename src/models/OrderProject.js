import mongoose from "mongoose";

const OrderProjectSchema = new mongoose.Schema(
  {
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    projectUrl: { type: String, required: true },
    userName: { type: String, required: true },
    userPhone: { type: String, required: true },
    userEmail: { type: String, required: true },
    userMessage: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.OrderProject ||
  mongoose.model("OrderProject", OrderProjectSchema);
