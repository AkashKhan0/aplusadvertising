import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema(
  {
    technology: [String],
    websiteType: String,
    pages: [String],
    features: [String],
    paymentMethods: [String],
    others: String,
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Plan || mongoose.model("Plan", PlanSchema);
