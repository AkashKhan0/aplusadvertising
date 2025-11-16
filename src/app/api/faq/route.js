// src/app/api/faq/route.js
import { NextResponse } from "next/server";
import db from "@/lib/mongodb"; // <-- তোমার lib ফাইল যদি অন্য নামে থাকে পরিবর্তন করো
import FAQ from "@/models/faq";

export async function GET(request) {
  try {
    await db(); // connect to DB (assumes exported function that connects)
    const faqs = await FAQ.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: faqs }, { status: 200 });
  } catch (err) {
    console.error("GET /api/faq error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { question, answer } = body;
    console.log("Mongo URI:", process.env.MONGO_URI);

    if (!question || !answer) {
      return NextResponse.json({ success: false, error: "Question and answer required" }, { status: 400 });
    }

    await db();
    const newFaq = await FAQ.create({ question, answer });
    return NextResponse.json({ success: true, data: newFaq }, { status: 201 });
  } catch (err) {
    console.error("POST /api/faq error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
