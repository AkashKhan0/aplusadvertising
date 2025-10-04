"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimationWrapper from "./AnimationWrapper";
import "../styles/project.css";
import Link from "next/link";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // default

  // Fetch projects from API
  const fetchSubCategories = async () => {
    try {
      const res = await fetch("/api/projects"); // adjust API route
      const data = await res.json();
      setProjects(data);
      if (data.length > 0) setActive(data[0]._id);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  // Responsive logic
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2); // Mobile
      else if (width < 1024) setVisibleCount(3); // Tablet
      else setVisibleCount(5); // Laptop/Desktop
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div className="w-full universal py-10 my-10 sm:my-14 md:my-20">
      <div className="fixed_width px-2 sm:px-4 md:px-6">
        {/* Heading */}
        <div className="w-full mb-8 flex flex-col items-end">
          <AnimationWrapper direction="right">
            <div className="w-fit flex items-center gap-3">
              <Image
                src="/images/project.gif"
                alt="aplus"
                width={20}
                height={20}
                className="mb-1"
                unoptimized
              />
              <h1 className="text-base sm:text-lg md:text-xl font-bold uppercase flex items-center ">
                <AnimatedText text="Our Projects" from="right" />
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
                text="Showcasing work that speaks louder than words!"
                from="right"
              />
            </h1>
          </AnimationWrapper>
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-col md:flex-row gap-5 mb-10 items-center mt-16 sm:mt-16 md:mt-10">
          <div className="w-full flex items-center justify-center">
            <div className="flex h-[400px] w-full overflow-hidden">
              {projects.slice(0, visibleCount).map((sub, index) => (
                <label
                  key={sub._id}
                  onClick={() => setActive(sub._id)}
                  className={`relative flex items-end rounded-2xl cursor-pointer shadow-xl transition-all duration-500 ease-[cubic-bezier(.28,-0.03,0,.99)] overflow-hidden mx-1 sm:mx-2
                    ${
                      active === sub._id
                        ? "flex-[5]" // expands
                        : "flex-[1]" // shrinks
                    }`}
                  style={{
                    backgroundImage: `url(${sub.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-black/70"></div>

                  <div className="relative flex text-white w-full p-5">
                    {/* Title & Description */}
                    <div
                      className={`flex flex-col justify-center pr-3 sm:pr-6 transition-all duration-300 ${
                        active === sub._id
                          ? "opacity-100 translate-y-0 delay-200"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <h4 className="uppercase font-semibold text-white text-lg sm:text-2xl md:text-4xl mb-5">
                        <AnimatedText text={sub.title} from="left" />
                      </h4>

                      <p className="text-base sm:text-lg text-white">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
