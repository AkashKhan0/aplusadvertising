"use client";
import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEye, FaExternalLinkAlt, FaCartPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { GrRefresh } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import { VscChromeMaximize } from "react-icons/vsc";

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [quickViewUrl, setQuickViewUrl] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/projects"); // your backend route
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className="universal mb-[50px]">
        <div className="fixed_width px-5 sm:px-2 md:px-2">
          {/* Header Section */}
          <div className="my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                <AnimatedText
                  text="Let’s turn your vision into Reality!"
                  from="right"
                />
              </h1>
              <p className="text-center text-lg font-medium my-5">
                Have a design idea or a website plan in mind? We’d love to see
                it! If you have a theme, reference, or layout you want us to
                follow, just share it with us. Our team will bring your vision
                to life with skill and creativity. Don’t have a design plan yet?
                No worries! You can pick from our ready-made templates or let us
                create a unique design that fits your brand perfectly. Whatever
                you choose, we’ll ensure your website stands out clean, modern,
                and professional.
              </p>
            </AnimationWrapper>
          </div>

          {/* Projects Section */}
          <div className="w-full py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {/* Loading */}
              {loading && (
              <div className="w-full m-auto flex justify-center items-center py-20">
                <p className="text-lg font-semibold animate-pulse">
                  Please wait, loading projects...
                </p>
              </div>
            )}

            {/* No Data Found */}
            {!loading && projects.length === 0 && (
              <div className="col-span-full flex justify-center items-center py-20">
                <Image
                  src="/images/nodata.jpg"
                  alt="aplus"
                  width={80}
                  height={50}
                  className="w-[200px] h-[200px]"
                  unoptimized
                />
              </div>
            )}

            {/* Project Cards */}
            {!loading &&
              projects.length > 0 &&
              projects.map((project) => (
                <div
                  key={project._id}
                  className="relative group shadow-lg flex flex-col justify-between h-full min-h-[350px] bg-[#000000a1] overflow-hidden"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Top Bar (Desktop View) */}
                  <div className="bg-[#707070] relative flex flex-col w-full">
                    <div className="px-2 pt-1 flex items-start justify-between">
                      <div className="w-[50%] bg-[#9c9c9c] rounded-tl-lg rounded-tr-lg flex items-center justify-between px-2 text-white text-[12px]">
                        <p className="">APlus Advertising</p>
                        <IoMdClose />
                      </div>
                      <div className="w-[50%] flex items-center justify-end gap-2.5 text-sm text-white">
                        <GoDash />
                        <VscChromeMaximize />
                        <IoMdClose />
                      </div>
                    </div>

                    <div className="px-2 py-1 bg-[#9c9c9c] flex items-center justify-between gap-2.5">
                      <div className="flex items-center justify-between text-white text-sm gap-2.5">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                        <GrRefresh />
                      </div>
                      <div className="rounded-full bg-[#707070] flex items-center justify-between gap-2.5 text-white px-2 text-[12px]">
                        <p className="lowercase">
                          {project.title.length > 7
                            ? project.title.slice(0, 7) + "..."
                            : project.title}
                        </p>
                        <IoMdClose />
                      </div>
                      <div className="text-white">
                        <MdMoreHoriz />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-5 flex flex-col h-full justify-between text-white z-10 cursor-pointer">
                    <div>
                      <h3 className="text-lg md:text-2xl capitalize font-bold mb-2">
                        {project.title.length > 7
                          ? project.title.slice(0, 7) + "..."
                          : project.title}
                      </h3>
                      <p className="text-sm md:text-base line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between mt-4 gap-3">
                      {/* Icons */}
                      <div className="flex gap-5 text-xl">
                        {/* Live View */}
                        <button
                          onClick={() => window.open(project.link, "_blank")}
                          className="hover:text-blue-400 transition-colors"
                        >
                          <FaExternalLinkAlt />
                        </button>

                        {/* Quick View */}
                        <button
                          onClick={() => setQuickViewUrl(project.link)}
                          className="hover:text-green-400 transition-colors"
                        >
                          <FaEye />
                        </button>
                      </div>

                      {/* I want this */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="hover:text-[#CBD6EB] transition text-xl"
                      >
                        <FaCartPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Quick View Modal */}
            {quickViewUrl && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="w-[90%] sm:w-[80%] md:w-[70%] h-[80%] bg-white overflow-hidden relative rounded-lg shadow-lg">
                  <button
                    onClick={() => setQuickViewUrl(null)}
                    className="absolute top-2 right-2 bg-black text-white p-2 rounded-full text-xl hover:bg-gray-800"
                  >
                    <IoMdClose />
                  </button>
                  <iframe
                    src={quickViewUrl}
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
            )}

            {/* I want this Modal */}
            {selectedProject && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="w-[90%] max-w-md bg-white p-5 relative rounded-lg shadow-lg">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-2 right-2 bg-black text-white p-1 text-xl rounded-md hover:bg-gray-800"
                  >
                    <IoMdClose />
                  </button>
                  <p className="mb-2 text-2xl">
                    <strong>Name:</strong> {selectedProject.title}
                  </p>
                  <p className="mb-4">
                    <strong>URL:</strong>{" "}
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      className="text-blue-600 underline break-all"
                    >
                      {selectedProject.link}
                    </a>
                  </p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Confirm Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="my-10">
            <AnimationWrapper direction="left">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                <AnimatedText text="Do you have any plan?" from="right" />
              </h1>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                <AnimatedText text="No!" from="left" />
              </h1>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                <AnimatedText text="Don't worry!" from="right" />
              </h1>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                <AnimatedText
                  text="We have a better plan for you."
                  from="left"
                />
              </h1>

              <div className="w-full flex items-center justify-center mt-5">
                <ButtonLink href="/plans" text="Let's visit" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
