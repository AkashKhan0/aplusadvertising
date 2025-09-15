import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";

// POST => Add new category
export async function POST(req) {
  try {
    await dbConnect();
    const { name, description } = await req.json(); // get description

    if (!name || !description) {
      return new Response(
        JSON.stringify({ error: "Category name and description are required" }),
        { status: 400 }
      );
    }

    const newCategory = await Category.create({ name, description });
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
