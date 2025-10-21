import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import SubCategory from "@/models/subCategory";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    console.log("🔹 [API] /api/subcategories called");

    await dbConnect();
    console.log("✅ MongoDB connected");

    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");

    const filter = categoryId ? { categoryId } : {};

    const subs = await SubCategory.find(filter)
      .populate("categoryId", "name")
      .sort({ createdAt: -1 })
      .lean();

    console.log("✅ Subcategories found:", subs.length);
    return NextResponse.json(subs, { status: 200 });
  } catch (err) {
    console.error("❌ GET /api/subcategories error:", err);
    return NextResponse.json(
      { error: "Failed to load subcategories", details: err.message },
      { status: 500 }
    );
  }
}
