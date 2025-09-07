import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";

// POST => Add new category
export async function POST(req) {
  try {
    await dbConnect();
    const { name } = await req.json();

    if (!name) {
      return new Response(JSON.stringify({ error: "Category name is required" }), { status: 400 });
    }

    const newCategory = await Category.create({ name });
    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// GET => Fetch all categories
export async function GET() {
  try {
    await dbConnect();
    const categories = await Category.find({});
    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
