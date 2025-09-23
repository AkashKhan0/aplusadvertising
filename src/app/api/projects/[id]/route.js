import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

// ✅ UPDATE project
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const body = await req.json();
    const updated = await Project.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ✅ DELETE project
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    await Project.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
