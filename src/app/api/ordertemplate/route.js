import dbConnect from "@/lib/mongodb";
import OrderTemplate from "@/models/OrderTemplate";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// === POST: Create new Template Order ===
export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const {
      templateId,
      templateName,
      templateUrl,
      userName,
      userPhone,
      userEmail,
      userMessage,
    } = body;

    if (
      !templateId ||
      !templateName ||
      !templateUrl ||
      !userName ||
      !userPhone ||
      !userEmail ||
      !userMessage
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newOrder = await OrderTemplate.create(body);

    // === Send email notification ===
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Template Order" <${process.env.MAIL_USER}>`,
        to: "aplusadvertisinglimited@gmail.com",
        subject: `New Template Order: ${templateName}`,
        html: `
          <h2>New Template Order Received</h2>
          <p><strong>Template:</strong> ${templateName}</p>
          <p><strong>URL:</strong> <a href="${templateUrl}">${templateUrl}</a></p>
          <hr />
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Phone:</strong> ${userPhone}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${userMessage}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
    }

    return NextResponse.json({ success: true, order: newOrder }, { status: 201 });
  } catch (error) {
    console.error("OrderTemplate POST error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// === GET: Fetch All Template Orders ===
export async function GET() {
  try {
    await dbConnect();
    const orders = await OrderTemplate.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    console.error("OrderTemplate GET error:", error);
    return NextResponse.json(
      { success: false, message: error.message, orders: [] },
      { status: 500 }
    );
  }
}
