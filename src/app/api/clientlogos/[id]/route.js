import dbConnect from "@/lib/mongodb";
import ClientLogo from "@/models/ClientLogo";

export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const updatedData = await req.json();
    const updated = await ClientLogo.findByIdAndUpdate(id, updatedData, { new: true });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    await ClientLogo.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Deleted successfully" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
