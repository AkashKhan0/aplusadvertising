// src/app/api/subcategories/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import SubCategory from "@/models/subCategory";

export async function GET(req) {
  await dbConnect();
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId");

    const filter = categoryId ? { categoryId } : {};
    const subs = await SubCategory.find(filter)
      .populate("categoryId", "name") // populate category name
      .sort({ createdAt: -1 });

    return NextResponse.json(subs, { status: 200 });
  } catch (err) {
    console.error("GET /subcategories error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();

    const { categoryId, title, description, image } = body;
    if (!categoryId || !title || !description || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newSub = await SubCategory.create(body);
    return NextResponse.json(newSub, { status: 201 });
  } catch (err) {
    console.error("POST /subcategories error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
