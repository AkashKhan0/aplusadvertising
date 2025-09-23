import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Review from "@/models/reviewModel";

// UPDATE Review
export async function PUT(req, { params }) {
  await connectDB();
  try {
    const body = await req.json();
    const { id } = params;

    const updated = await Review.findByIdAndUpdate(id, body, { new: true });

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE Review
export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const { id } = params;

    const deleted = await Review.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
