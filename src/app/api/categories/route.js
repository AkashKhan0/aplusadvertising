import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, description, image } = await req.json();

    console.log("POST data:", { name, description, image }); // ✅ Debug

    if (!name || !description || !image) {
      return new Response(
        JSON.stringify({ error: "All fields (name, description, image) are required" }),
        { status: 400 }
      );
    }

    const newCategory = await Category.create({ name, description, image });
    console.log("Saved Category:", newCategory); // ✅ Debug

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const categories = await Category.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
