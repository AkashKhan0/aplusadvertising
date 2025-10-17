import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Template from "@/models/Template";

// ✅ GET all templates
export async function GET() {
  await dbConnect();
  const templates = await Template.find({});
  return NextResponse.json(templates);
}

// ✅ POST new template
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const template = await Template.create(body);
    return NextResponse.json(template, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
