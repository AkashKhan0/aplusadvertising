import dbConnect from "@/lib/mongodb";
import Plan from "@/models/Plan";

export async function GET() {
  try {
    await dbConnect();
    const plans = await Plan.find({}).sort({ createdAt: -1 });

    return new Response(
      JSON.stringify({
        success: true,
        orders: plans,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
