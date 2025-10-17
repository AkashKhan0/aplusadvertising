import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Template from "@/models/Template";

// ✅ UPDATE template
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const body = await req.json();
    const updated = await Template.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ✅ DELETE template
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    await Template.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
