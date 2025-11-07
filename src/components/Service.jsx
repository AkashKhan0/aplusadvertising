"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimationWrapper from "./AnimationWrapper";
import "../styles/service.css";
import Link from "next/link";

export default function Service() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setCategories(data);
        if (data.length > 0) setActiveCategory(data[0]); // default 1st category
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }
    fetchCategories();
  }, []);


  if (!categories.length)
    return <p className="text-center py-10">Loading categories...</p>;

  return (
    <div className="w-full universal">
      <div className="fixed_width px-2 sm:px-4 md:px-2 lg:px-0">
        {/* Heading */}
        <div className="w-full mb-8">
          <AnimationWrapper direction="left">
            <div className="w-fit flex items-center gap-3">
              <Image
                src="/images/services.gif"
                alt="aplus"
                width={20}
                height={20}
                className="mb-1"
                unoptimized
              />
              <h1 className="text-base sm:text-lg md:text-xl font-bold uppercase flex items-center ">
                <AnimatedText text="Our Services" from="left" />
                <Link href="/services">
                  <span className="ml-10 sm:ml-20 border text-sm py-2 px-3.5 cursor-pointer hover:bg-[#ddd] duration-300">
                    view all
                  </span>
                </Link>
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper direction="right">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              <AnimatedText
                text="Where quality meets amazing service!"
                from="right"
              />
            </h1>
          </AnimationWrapper>
        </div>

        {/* Content */}
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {categories.map((cat) => (
              <div
                key={cat._id}
                className="rounded-md p-5 flex flex-col items-center justify-start max-w-[300px] bg-[#ddd]"
              >
                <Image
                  src="./images/seo.png"
                  alt={cat.name}
                  width={60}
                  height={60}
                  unoptimized
                  className=""
                />
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold my-2 text-center">
                  {cat.name}
                </h2>
                <p className="text-lg text-center">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
