import dbConnect from "@/lib/mongodb";
import OrderProject from "@/models/OrderProject";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const {
      projectId,
      projectName,
      projectUrl,
      userName,
      userPhone,
      userEmail,
      userMessage,
    } = body;

    // Validation
    if (
      !projectId ||
      !projectName ||
      !projectUrl ||
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

    // Save to MongoDB
    const newOrder = await OrderProject.create(body);

    // === Send Email Notification ===
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // your App Password (not normal password)
      },
    });

    const mailOptions = {
      from: `"Order Notification" <${process.env.MAIL_USER}>`,
      to: "aplusadvertisinglimited@gmail.com",
      subject: `New Project Order: ${projectName}`,
      html: `
        <h2>New Project Order Received</h2>
        <p><strong>Project:</strong> ${projectName}</p>
        <p><strong>URL:</strong> <a href="${projectUrl}" target="_blank">${projectUrl}</a></p>
        <hr />
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Phone:</strong> ${userPhone}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${userMessage}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, order: newOrder }, { status: 201 });
  } catch (error) {
    console.error("OrderProject Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}


// === GET: Fetch All Orders ===
export async function GET() {
  try {
    await dbConnect();
    const orders = await OrderProject.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, orders }, { status: 200 });
  } catch (error) {
    console.error("OrderProject GET error:", error);
    return NextResponse.json(
      { success: false, message: error.message, orders: [] },
      { status: 500 }
    );
  }
}