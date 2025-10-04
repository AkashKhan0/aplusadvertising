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
  const [animateKey, setAnimateKey] = useState(0); // re-trigger animation

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

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setAnimateKey((prev) => prev + 1); // force animation reset
  };

  if (!categories.length)
    return <p className="text-center py-10">Loading categories...</p>;

  return (
    <div className="w-full universal py-10">
      <div className="fixed_width px-2 sm:px-4 md:px-6">
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
                  <span className="ml-10 sm:ml-20 border text-sm pt-[3px] px-3.5 cursor-pointer hover:bg-[#99A1AF] duration-300">
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
        <div className="flex flex-col sm:flex-col md:flex-row gap-5 mb-10 items-center mt-16 sm:mt-16 md:mt-10">
          {/* Categories */}
          <div className="w-full sm:w-full md:w-[25%] flex flex-col gap-5">
            {categories.map((cat) => (
              <AnimationWrapper key={cat._id} direction="left">
                <div
                  onClick={() => handleCategoryClick(cat)}
                  className={`cursor-pointer py-2 px-3 font-semibold border rounded-lg duration-300 capitalize ${
                    activeCategory?._id === cat._id
                      ? "bg-[#9EAABD] text-white"
                      : "hover:bg-[#A2B2D1]"
                  }`}
                >
                  {cat.name}
                </div>
              </AnimationWrapper>
            ))}
          </div>

          {/* BookCard */}
          <div className="w-full md:w-[75%] flex justify-center md:justify-center items-center mr-10 md:mr-0 mt-10 sm:mt-10 md:mt-0">
            {activeCategory && (
              <BookCard
                key={animateKey} // re-trigger animation
                title={activeCategory.name}
                description={activeCategory.description}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===========================
   BOOKCARD COMPONENT INSIDE
   =========================== */
function BookCard({ title, description }) {
  return (
    <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[200px] rounded-lg bg-white shadow-lg flex items-center justify-center text-black cursor-pointer perspective-1000 [transform-style:preserve-3d]">
      {/* Cover Animation */}
      <div className="absolute top-0 w-full h-full rounded-lg bg-gray-400 shadow-md flex items-center justify-center transition-all duration-700 animate-coverRotate origin-left">
        <p className="text-lg font-semibold">Explore</p>
      </div>

      {/* Inner Content */}
      <div className="w-full h-[90%] rounded-lg bg-gray-200 shadow-md flex flex-col items-center justify-center gap-4 px-4 text-center transition-all duration-700 animate-innerShow opacity-0">
        <h3 className="text-xl sm:text-2xl font-bold opacity-0 animate-fadeRight capitalize">
          {title}
        </h3>
        <p className="text-lg font-medium opacity-1 animate-fadeUp">
          {description}
        </p>
      </div>
    </div>
  );
}
