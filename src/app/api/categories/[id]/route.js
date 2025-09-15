import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";

// UPDATE category
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const { name, description } = await req.json(); // get description

    if (!name || !description) {
      return new Response(
        JSON.stringify({ error: "Name and description are required" }),
        { status: 400 }
      );
    }

    const updated = await Category.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );

    if (!updated) {
      return new Response(JSON.stringify({ error: "Category not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(updated), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// DELETE category
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) {
      return new Response(JSON.stringify({ error: "Category not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Category deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
