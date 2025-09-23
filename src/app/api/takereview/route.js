import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Review from "@/models/reviewModel";

// CREATE Review
export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const review = await Review.create(body);
    return NextResponse.json({ success: true, review });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// GET All Reviews
export async function GET() {
  await connectDB();
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
