"use client";
import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaCartPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Template() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonText, setButtonText] = useState("Confirm Request");

  // 🧩 Fetch templates from backend
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/template");
        const data = await res.json();
        setTemplates(data);
      } catch (err) {
        console.error("Error fetching templates:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  return (
    <>
      <div className="universal mb-[50px]">
        <div className="fixed_width px-5 sm:px-2 md:px-2">
          <div className="universal_col p-5">
            {/* Header Section */}
            <div className="my-5">
              <AnimationWrapper direction="left">
                <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                  <AnimatedText
                    text="Explore Our Website Templates"
                    from="right"
                  />
                </h1>
                <p className="text-center text-lg font-medium my-5">
                  Pick any design you love. You can view or request
                  customization instantly.
                </p>
              </AnimationWrapper>
            </div>

            {/* Loading */}
            {loading && (
              <div className="w-full m-auto flex justify-center items-center py-20">
                <p className="text-lg font-semibold animate-pulse">
                  Please wait, loading templates...
                </p>
              </div>
            )}

            {/* No Data Found */}
            {!loading && templates.length === 0 && (
              <div className="w-full flex justify-center items-center py-20">
                <p className="text-gray-500 text-lg font-semibold">
                  No templates found.
                </p>
              </div>
            )}

            {/* Templates Section */}
            <div className="w-full py-5 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {!loading &&
                templates.length > 0 &&
                templates.map((template) => (
                  <div key={template._id}>
                    <div
                      key={template._id}
                      className="relative flex flex-col justify-center items-center text-center overflow-hidden"
                    >
                      <div className="w-full border-4 border-[#981D02] rounded-xl overflow-hidden">
                        {/* Iframe View */}
                        <div className="w-full h-[250px]">
                          <iframe
                            src={template.url}
                            className="w-full h-full border-0"
                            title={template.title}
                          ></iframe>
                        </div>

                        {/* Bottom Action Section */}
                        <div className="w-full flex py-1 items-center justify-around bg-[#000000]">
                          {/* Live View Button */}
                          <button
                            onClick={() => window.open(template.url, "_blank")}
                            className="flex items-center text-white hover:text-[#7a1601] duration-300"
                          >
                            <FaExternalLinkAlt />
                          </button>

                          {/* Add to Cart Button */}
                          <button
                            onClick={() => setSelectedTemplate(template)}
                            className="flex items-center text-white hover:text-[#7a1601] duration-300"
                          >
                            <FaCartPlus />
                          </button>
                        </div>
                      </div>
                      <div className="w-full flex flex-col justify-center items-center">
                        <div className="w-[20px] h-[20px] bg-[#000]"></div>
                        <div className="w-[60px] h-[6px] bg-[#000] rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Add to Cart Modal */}
            {selectedTemplate && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="w-[90%] max-w-md bg-white p-5 relative rounded-lg shadow-lg">
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="absolute top-2 right-2 bg-black text-white p-1 text-xl rounded-md hover:bg-gray-800"
                  >
                    <IoMdClose />
                  </button>

                  <h2 className="text-2xl mb-3 font-bold">
                    {selectedTemplate.title}
                  </h2>
                  <a
                    href={selectedTemplate.url}
                    target="_blank"
                    className="text-blue-600 underline break-all"
                  >
                    {selectedTemplate.url}
                  </a>

                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setButtonText("Submitting...");
                      const formData = new FormData(e.target);
                      const userName = formData.get("userName");
                      const userPhone = formData.get("userPhone");
                      const userEmail = formData.get("userEmail");
                      const userMessage = formData.get("userMessage");

                      try {
                        const res = await fetch("/api/ordertemplate", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            templateId: selectedTemplate._id,
                            templateName: selectedTemplate.title,
                            templateUrl: selectedTemplate.url,
                            userName,
                            userPhone,
                            userEmail,
                            userMessage,
                          }),
                        });

                        const data = await res.json();
                        if (data.success) {
                          setButtonText("✅ Request Sent Successfully!");
                          e.target.reset();
                          setTimeout(() => {
                            setSelectedTemplate(null);
                            setButtonText("Confirm Request");
                          }, 2000);
                        } else {
                          setButtonText("❌ Failed! Try Again");
                          setTimeout(() => setButtonText("Confirm Request"), 2000);
                        }
                      } catch (err) {
                        console.error(err);
                        setButtonText("❌ Server Error");
                        setTimeout(() => setButtonText("Confirm Request"), 2000);
                      }
                    }}
                  >
                    <div className="mt-3">
                      <label className="block text-sm font-semibold mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="userName"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                      />
                    </div>

                    <div className="mt-3">
                      <label className="block text-sm font-semibold mb-1">
                        Phone or WhatsApp
                      </label>
                      <input
                        type="text"
                        name="userPhone"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                      />
                    </div>

                    <div className="mt-3">
                      <label className="block text-sm font-semibold mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="userEmail"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                      />
                    </div>

                    <div className="mt-3">
                      <label className="block text-sm font-semibold mb-1">
                        Message
                      </label>
                      <textarea
                        name="userMessage"
                        rows="3"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-5 w-full bg-[#981D02] text-white py-2 rounded-lg hover:bg-[#7a1601] transition-all duration-300"
                      disabled={buttonText !== "Confirm Request"}
                    >
                      {buttonText}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Plan Section */}
          <div className="my-20">
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
