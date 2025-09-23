import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";


// ✅ GET all projects
export async function GET() {
  await dbConnect();
  const projects = await Project.find({});
  return NextResponse.json(projects);
}

// ✅ POST new project
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
