"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimationWrapper from "./AnimationWrapper";
import "../styles/service.css";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Process from "./Process";

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
    <>
    <Process />
    <div className="w-full universal py-20 bg-[#FAF9D0]">
      <div className="fixed_width px-5 sm:px-2 md:px-2 lg:px-0">
        {/* Heading */}
        <div className="w-full flex flex-col items-center justify-center">
          <AnimationWrapper direction="left">
            <div className="w-fit flex items-center gap-3">
              <h1 className="text-base sm:text-lg md:text-xl font-bold uppercase flex items-center ">
                <AnimatedText text="Our Services" from="left" />
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper direction="right">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-center">
              <AnimatedText
                text="Where quality meets amazing service!"
                from="right"
              />
            </h1>
          </AnimationWrapper>
        </div>

        {/* Content */}
        <div className="w-full flex items-center justify-center py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat._id}
                className="rounded-md p-5 flex flex-col items-center justify-start w-full bg-[#F1E3A4] duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg mx-auto cursor-pointer"
              >
                <Image
                  src={cat.image}
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

          <div className="w-full flex items-center justify-center my-5">
                <ButtonLink href="/services" text="view all" />
          </div>

      </div>
    </div>
    </>
  );
}
