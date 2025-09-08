// src/app/api/upload/route.js
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// configure - values from .env.local
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // convert to base64 data URI
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const dataUri = `data:${file.type};base64,${base64}`;

    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      folder: "subcategories",
      resource_type: "image",
    });

    return NextResponse.json({ url: uploadResult.secure_url }, { status: 200 });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
