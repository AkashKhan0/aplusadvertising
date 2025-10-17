import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

// GET → Single blog by ID
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// UPDATE → Edit blog
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const updatedData = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedBlog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// DELETE → Remove blog
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Blog deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
