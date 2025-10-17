"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";

export default function Blog() {

  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  // fetch all blogs
  const fetchBlogs = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <>
    <div className="universal mb-[50px]">
      <div className="fixed_width px-5 sm:px-2 md:px-2">
        <AnimationWrapper direction="left">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center my-5">
            <AnimatedText text="Grow Online Smarter!" from="right" />
          </h1>
          <p className="text-center text-lg font-medium mb-2">
            Explore expert tips, design trends, and marketing strategies to help your business stand out in the digital world. Stay updated with the latest in web design, branding, and online growth.
          </p>
        </AnimationWrapper>

{/* blog content boxes */}
        <div className="w-full my-10 px-4">
      <div className="w-full py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-36 object-cover"
              />
            )}

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 p-4">
              <div>
                <h3 className="text-lg font-semibold line-clamp-2 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {blog.metaDescription}
                </p>
              </div>

              <button
                onClick={() => router.push(`/blogs/${blog._id}`)}
                className="mt-4 text-sm font-semibold px-4 py-1 w-fit border duration-300 hover:text-[#9c1f0e]"
              >
                Read More 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
    </div>
    </>
  );
}