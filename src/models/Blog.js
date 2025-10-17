import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    metaDescription: { type: String, required: true },
    image: { type: String }, // Cloudinary URL

    introduction: { type: String, required: true },

    subTitle1: { type: String },
    subDesc1: { type: String },
    subTitle2: { type: String },
    subDesc2: { type: String },
    subTitle3: { type: String },
    subDesc3: { type: String },
    subTitle4: { type: String },
    subDesc4: { type: String },
    subTitle5: { type: String },
    subDesc5: { type: String },

    conclusion: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
