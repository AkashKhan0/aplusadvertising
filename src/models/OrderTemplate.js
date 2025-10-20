import mongoose from "mongoose";

const OrderTemplateSchema = new mongoose.Schema(
  {
    templateId: { type: String, required: true },
    templateName: { type: String, required: true },
    templateUrl: { type: String, required: true },
    userName: { type: String, required: true },
    userPhone: { type: String, required: true },
    userEmail: { type: String, required: true },
    userMessage: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.OrderTemplate ||
  mongoose.model("OrderTemplate", OrderTemplateSchema);
