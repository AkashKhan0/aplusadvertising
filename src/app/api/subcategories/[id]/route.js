import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import SubCategory from "@/models/subCategory";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const sub = await SubCategory.findById(params.id);
    if (!sub) {
      return NextResponse.json({ error: "SubCategory not found" }, { status: 404 });
    }
    return NextResponse.json(sub, { status: 200 });
  } catch (err) {
    console.error("GET /subcategories/[id] error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await dbConnect();
  try {
    const body = await req.json();
    const updated = await SubCategory.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "SubCategory not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("PUT /subcategories/[id] error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    const deleted = await SubCategory.findByIdAndDelete(params.id);
    if (!deleted) {
      return NextResponse.json({ error: "SubCategory not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "SubCategory deleted successfully" }, { status: 200 });
  } catch (err) {
    console.error("DELETE /subcategories/[id] error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
