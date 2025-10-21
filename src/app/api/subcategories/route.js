import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import SubCategory from "@/models/subCategory";

// ✅ Always treat this API as dynamic (no caching by Vercel)
export const dynamic = "force-dynamic";

// 🟩 GET → Fetch all subcategories or filter by categoryId
export async function GET(req) {
  try {
    // Ensure MongoDB connection (inside try block for proper error handling)
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");

    const filter = categoryId ? { categoryId } : {};

    // Fetch subcategories with category name populated
    const subs = await SubCategory.find(filter)
      .populate("categoryId", "name")
      .sort({ createdAt: -1 })
      .lean(); // faster, returns plain JS objects

    return NextResponse.json(subs, { status: 200 });
  } catch (err) {
    console.error("GET /api/subcategories error:", err);
    return NextResponse.json(
      { error: "Failed to load subcategories", details: err.message },
      { status: 500 }
    );
  }
}

// 🟦 POST → Create a new subcategory
export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { categoryId, title, description, image } = body;

    // Basic validation
    if (!categoryId || !title || !description || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create subcategory document
    const newSub = await SubCategory.create(body);
    return NextResponse.json(newSub, { status: 201 });
  } catch (err) {
    console.error("POST /api/subcategories error:", err);
    return NextResponse.json(
      { error: "Failed to create subcategory", details: err.message },
      { status: 500 }
    );
  }
}
