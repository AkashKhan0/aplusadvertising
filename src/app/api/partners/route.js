// src/app/api/partners/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Partner from "@/models/partnerModel";

export async function GET() {
  try {
    await connectDB();
    const partners = await Partner.find().sort({ createdAt: -1 });
    return NextResponse.json(partners, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // basic validation
    const { profilePicture, name, title, description } = body;
    if (!profilePicture || !name || !title || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newPartner = await Partner.create({
      profilePicture,
      name,
      title,
      description,
    });

    return NextResponse.json(newPartner, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
