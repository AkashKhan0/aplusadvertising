import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

// POST → Create new blog
export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    const {
      title,
      metaDescription,
      image,
      introduction,
      subTitle1,
      subDesc1,
      subTitle2,
      subDesc2,
      subTitle3,
      subDesc3,
      subTitle4,
      subDesc4,
      subTitle5,
      subDesc5,
      conclusion,
    } = data;

    if (!title || !metaDescription || !introduction || !conclusion) {
      return new Response(
        JSON.stringify({ error: "Required fields missing" }),
        { status: 400 }
      );
    }

    const newBlog = await Blog.create({
      title,
      metaDescription,
      image,
      introduction,
      subTitle1,
      subDesc1,
      subTitle2,
      subDesc2,
      subTitle3,
      subDesc3,
      subTitle4,
      subDesc4,
      subTitle5,
      subDesc5,
      conclusion,
    });

    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// GET → Fetch all blogs
export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
