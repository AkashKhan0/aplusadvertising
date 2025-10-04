// src/app/api/faq/[id]/route.js
import { NextResponse } from "next/server";
import db from "@/lib/mongodb";
import FAQ from "@/models/faq";
import mongoose from "mongoose";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 });
    }
    await db();
    const faq = await FAQ.findById(id);
    if (!faq) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: faq }, { status: 200 });
  } catch (err) {
    console.error("GET /api/faq/[id] error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 });
    }
    const body = await request.json();
    const { question, answer } = body;
    if (!question || !answer) {
      return NextResponse.json({ success: false, error: "Question and answer required" }, { status: 400 });
    }

    await db();
    const updated = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (err) {
    console.error("PUT /api/faq/[id] error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json({ success: false, error: "Invalid id" }, { status: 400 });
    }
    await db();
    const deleted = await FAQ.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: deleted }, { status: 200 });
  } catch (err) {
    console.error("DELETE /api/faq/[id] error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
