import dbConnect from "@/lib/mongodb";
import ClientLogo from "@/models/ClientLogo";

export async function GET() {
  try {
    await dbConnect();
    const logos = await ClientLogo.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify(logos), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const newLogo = await ClientLogo.create(data);
    return new Response(JSON.stringify(newLogo), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
