"use client";
import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEye, FaExternalLinkAlt, FaCartPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [quickViewUrl, setQuickViewUrl] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/projects");
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
            </AnimationWrapper>

            <AnimationWrapper direction="right">
              <p className="text-justify text-lg font-medium my-5">
                Have a website design idea or layout plan in mind? We’d love to
                see it! At A Plus Advertising Limited, our expert team
                transforms your concepts into fully functional, visually
                stunning websites that capture your brand’s identity and engage
                your audience.
              </p>
            </AnimationWrapper>

            <AnimationWrapper direction="left">
              <p className="text-justify text-lg font-medium my-5">
                Already have a theme, reference, or preferred layout? Simply
                share it with us, and we’ll bring your vision to life with
                precision, creativity, and attention to detail. Don’t have a
                design plan yet? No problem! You can choose from our ready-made
                website templates or let us craft a custom design tailored
                exclusively to your business goals.
              </p>
            </AnimationWrapper>
          </div>

          {/* Projects Section */}
          <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
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
                  className="relative group flex flex-col justify-between h-full min-h-[300px] bg-[#F1E3A4] overflow-hidden duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg"
                >
                  
                  {/* Content */}
                  <div className="relative flex flex-col h-full justify-between z-10 cursor-pointer">                    
                    <div className="w-full h-[200px]">
                      <Image
                        src={project.image}
                        alt={project.title}                        
                    width={100}
                    height={100}
                    unoptimized
                    className="w-full h-full object-fill" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg md:text-2xl capitalize font-bold mb-2 text-center">
                        {project.title}
                      </h3>
                      <p className="text-base text-justify leading-tight">
                        {project.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-evenly my-4 gap-5">
                      {/* Icons */}
                      <button
                        onClick={() => window.open(project.link, "_blank")}
                        className="hover:text-[#9c1f0e] transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </button>

                      <button
                        onClick={() => setQuickViewUrl(project.link)}
                        className="hover:text-[#9c1f0e] transition-colors"
                      >
                        <FaEye />
                      </button>
                      {/* I want this */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="hover:text-[#9c1f0e] transition text-xl"
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
                <div className="w-[90%] max-w-md bg-[#F1E3A4] p-5 relative rounded-lg shadow-lg">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-2 right-2 bg-black text-white p-1 text-xl rounded-md hover:bg-gray-800"
                  >
                    <IoMdClose />
                  </button>

                  <h2 className="text-2xl font-semibold mb-3 capitalize text-center">
                    Confirm Your Order
                  </h2>
                  <p className="text-gray-700 capitalize text-xl">
                    <strong>Project:</strong> {selectedProject.title} 
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>URL:</strong>{" "}
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      className="text-[#181520] underline-none break-all"
                    >
                      {selectedProject.link}
                    </a>
                  </p>

                  {/* ✅ Updated Form */}
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const userName = formData.get("userName");
                      const userPhone = formData.get("userPhone");
                      const userEmail = formData.get("userEmail");
                      const userMessage = formData.get("userMessage");

                      const btn = e.target.querySelector(
                        "button[type='submit']"
                      );
                      btn.disabled = true;
                      btn.textContent = "Submitting...";

                      try {
                        const res = await fetch("/api/orderproject", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            projectId: selectedProject._id,
                            projectName: selectedProject.title,
                            projectUrl: selectedProject.link,
                            userName,
                            userPhone,
                            userEmail,
                            userMessage,
                          }),
                        });

                        const data = await res.json();

                        if (data.success) {
                          btn.textContent = "✅ Order Confirmed!";
                          btn.classList.add("bg-green-600");
                          e.target.reset();

                          setTimeout(() => {
                            setSelectedProject(null);
                          }, 1500);
                        } else {
                          btn.textContent = "❌ Failed, try again!";
                          btn.classList.add("bg-red-600");
                        }
                      } catch (err) {
                        console.error(err);
                        btn.textContent = "❌ Server Error!";
                        btn.classList.add("bg-red-600");
                      } finally {
                        setTimeout(() => {
                          if (btn) {
                            btn.disabled = false;
                            btn.textContent = "Confirm Request";
                            btn.classList.remove("bg-green-600", "bg-red-600");
                          }
                        }, 2500);
                      }
                    }}
                  >
                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="userName"
                        className="w-full border border-[#181520] p-2 rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Phone or WhatsApp
                      </label>
                      <input
                        type="text"
                        name="userPhone"
                        className="w-full border border-[#181520] p-2 rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="userEmail"
                        className="w-full border border-[#181520] p-2 rounded-md"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-semibold mb-1">
                        Message
                      </label>
                      <textarea
                        name="userMessage"
                        rows="3"
                        className="w-full border border-[#181520] p-2 rounded-md"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full neu-button"
                    >
                      Confirm Request
                    </button>
                  </form>
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
