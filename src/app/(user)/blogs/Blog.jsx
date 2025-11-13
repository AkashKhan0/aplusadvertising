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
              <AnimatedText text="Grow Online Smarter" from="right" />
            </h1>
            <p className="text-lg font-medium mb-2 text-justify">
              Explore expert insights, web design trends, and proven marketing
              strategies to help your business stand out in today’s digital
              world. Stay ahead with the latest tips on SEO, branding, website
              optimization, and online growth, everything you need to build a
              stronger digital presence.
            </p>
            <p className="text-justify text-lg font-medium mb-2">
              Whether you’re a startup or a growing brand, our blogs are
              designed to help you attract customers, boost visibility, and grow
              smarter online.
            </p>
          </AnimationWrapper>

          {/* blog content boxes */}
          <div className="w-full my-10">
            <div className="w-full py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-36 object-fill"
                    />
                  )}

                  {/* Content */}
                  <div className="flex flex-col justify-between items-center flex-1 p-4">
                    <div>
                      <h3 className="text-lg text-center font-semibold line-clamp-2 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-[#0A152F] text-sm line-clamp-2 text-justify">
                        {blog.metaDescription}
                      </p>
                    </div>

                    <button
                      onClick={() => router.push(`/blogs/${blog._id}`)}
                      className="neu-button mt-3 w-fit"
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
