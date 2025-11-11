import mongoose from "mongoose";

const ClientLogoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.ClientLogo ||
  mongoose.model("ClientLogo", ClientLogoSchema);
