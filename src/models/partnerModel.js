import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String, // image URL (upload করলে URL save হবে)
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Partner =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);

export default Partner;
