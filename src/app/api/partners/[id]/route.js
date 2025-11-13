import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Partner from "@/models/partnerModel";



export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const partner = await Partner.findById(id);
    if (!partner) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(partner, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const updated = await Partner.findByIdAndUpdate(id, body, { new: true });
    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const deleted = await Partner.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
