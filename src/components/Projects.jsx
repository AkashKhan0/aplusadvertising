"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimationWrapper from "./AnimationWrapper";
import "../styles/project.css";
import ButtonLink from "./ButtonLink";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects from API
  const fetchSubCategories = async () => {
    try {
      const res = await fetch("/api/projects"); // adjust API route
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <div className="w-full universal py-20 bg-[#FAF9D0]">
      <div className="fixed_width px-2 sm:px-4 md:px-6">
        {/* Heading */}
        <div className="w-full flex flex-col items-center justify-center">
          <AnimationWrapper direction="right">
            <div className="w-fit flex items-center gap-3">
              <h1 className="text-base sm:text-lg md:text-xl font-bold uppercase flex items-center ">
                <AnimatedText text="Our Projects" from="right" />
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

        <div className="w-full flex items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
            {projects.slice(0, 4).map((project) => (
              <div
                key={project._id}
                className="rounded-md p-5 flex flex-col items-center justify-start bg-[#F1E3A4] duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg mx-auto cursor-pointer w-full gap-5"
              >
                <div className="w-full flex items-center justify-center h-[150px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={50}
                    height={50}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2">
                  <h2 className="text-2xl capitalize font-semibold">
                    {project.title.split(" ").length > 3
                      ? project.title.split(" ").slice(0, 5).join(" ") + "..."
                      : project.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#222] text-center">
                    {project.description.split(" ").length > 5
                      ? project.description.split(" ").slice(0, 5).join(" ") +
                        "..."
                      : project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-2">
          <ButtonLink href="/projects" text="view all" />
        </div>
      </div>
    </div>
  );
}
