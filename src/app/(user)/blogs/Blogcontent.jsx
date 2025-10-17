"use client";
import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function BlogContent({ blogId }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blogId) {
      fetch(`/api/blog/${blogId}`)
        .then((res) => res.json())
        .then((data) => setBlog(data))
        .catch((err) => console.error(err));
    }
  }, [blogId]);

  if (!blog) return <p className="p-6">Loading...</p>;

  return (
    <div className="universal mb-[50px]">
      <div className="fixed_width px-5 sm:px-2 md:px-2 overflow-hidden">
        <div className="w-full py-10">
          <div className="w-full flex flex-col sm:flex-col md:flex-row gap-5 items-center">
            <div className="w-full sm:w-full md:w-[40%]">
              <AnimationWrapper direction="left">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover my-4"
                  />
                )}
              </AnimationWrapper>
            </div>

            <div className="w-full sm:w-full md:w-[60%]">
              <AnimationWrapper direction="right">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold py-2">
                  {blog.title}
                </h1>
                <p className="text-base">{blog.metaDescription}</p>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold capitalize py-2">
                  Introduction
                </h1>
                <p className="text-base">{blog.introduction}</p>
              </AnimationWrapper>
            </div>
          </div>

          {/* title 1 */}
          <div className="w-full my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold py-2">
                {blog.subTitle1}
              </h1>
            </AnimationWrapper>
            <AnimationWrapper direction="right">
              <p className="text-base">{blog.subDesc1}</p>
            </AnimationWrapper>
          </div>

          {/* title 2 */}
          <div className="w-full my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold py-2">
                {blog.subTitle2}
              </h1>
            </AnimationWrapper>
            <AnimationWrapper direction="right">
              <p className="text-base">{blog.subDesc2}</p>
            </AnimationWrapper>
          </div>

          {/* title 3 */}
          <div className="w-full my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold py-2">
                {blog.subTitle3}
              </h1>
            </AnimationWrapper>
            <AnimationWrapper direction="right">
              <p className="text-base">{blog.subDesc3}</p>
            </AnimationWrapper>
          </div>

          {/* title 4 */}
          <div className="w-full my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold py-2">
                {blog.subTitle4}
              </h1>
            </AnimationWrapper>
            <AnimationWrapper direction="right">
              <p className="text-base">{blog.subDesc4}</p>
            </AnimationWrapper>
          </div>

          {/* title 5 */}
          <div className="w-full my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold py-2">
                {blog.subTitle5}
              </h1>
            </AnimationWrapper>
            <AnimationWrapper direction="right">
              <p className="text-base">{blog.subDesc5}</p>
            </AnimationWrapper>
          </div>

          {/* conclusion */}
          <div className="w-full my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold py-2">
                Conclusion
              </h1>
            </AnimationWrapper>
            <AnimationWrapper direction="right">
              <p className="text-base">{blog.conclusion}</p>
            </AnimationWrapper>
          </div>

          {/* conclusion */}
          <div className="w-full my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold py-2">
                Call to Action (CTA)
              </h1>
            </AnimationWrapper>
            <AnimationWrapper direction="right">
              <p className="text-base">
                Contact us today to create a beautiful, modern, and effective
                website for your business:
              </p>
            </AnimationWrapper>

            <div className="my-5">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 title1">
                <TbWorldWww />
                <a
                  href="https://aplusadvertisinglimited.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Website URL : https://aplusadvertisinglimited.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 title1">
                <FaWhatsapp />
                <a
                  href="https://wa.me/8801850219432?text=Hello%20Aplus%2C%20I%E2%80%99m%20interested%20in%20your%20%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: 01850-219432
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
