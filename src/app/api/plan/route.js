import dbConnect from "@/lib/mongodb";
import Plan from "@/models/Plan";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    const newPlan = await Plan.create(data);

    // ✉️ Send mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO || data.email,
      subject: "New Website Plan Submitted",
      text: `
New Website Plan Details:

Technology: ${data.technology.join(", ")}
Website Type: ${data.websiteType}
Pages: ${data.pages.join(", ")}
Features: ${data.features.join(", ")}
Payment: ${data.paymentMethods.join(", ")}
Others: ${data.others || "N/A"}
      `,
    });

    return NextResponse.json({ message: "Plan saved and mail sent!" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
