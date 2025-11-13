"use client";

import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }

    // Reset message after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="universal my-[50px]">
      <div className="fixed_width px-5">
        <div className="w-full flex flex-col-reverse sm:flex-col-reverse md:flex-row items-stretch py-10">
          {/* Left part (info) */}
          <div className="w-full sm:w-full md:w-[50%] flex flex-col items-start justify-center">
            <AnimationWrapper direction="left">
              <h1 className="text-lg sm:text-xl md:text-xl font-semibold uppercase title1">
                <AnimatedText text="get in touch" from="right" />
              </h1>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col uppercase">
                <AnimatedText text="Contact Us for Web," from="right" />
                <AnimatedText text="SEO & Marketing Solutions" from="right" />
              </h1>
            </AnimationWrapper>

            <div className="w-full flex flex-col">
              {/* phone call */}
              <h1 className="text-lg font-semibold uppercase text-[#0A152F] mt-5">
                <AnimatedText text="Contact with" from="right" />
              </h1>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/phone-icon.gif"
                  alt="phone icon"
                  width={25}
                  height={25}
                  unoptimized
                  className="object-contain"
                />
                <a
                  href="tel:+8801850219432"
                  className="text-lg font-semibold hover:text-[#9c1f0e] transition duration-300"
                >
                  +8801850219432
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/whatsapp.gif"
                  alt="phone icon"
                  width={25}
                  height={25}
                  unoptimized
                  className="object-contain"
                />
                <a
                  href="https://wa.me/8801850219432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-[#25D366] transition duration-300"
                >
                  +8801850219432
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/email.gif"
                  alt="phone icon"
                  width={25}
                  height={25}
                  unoptimized
                  className="object-contain"
                />
                <a
                  href="mailto:aplusadvertisinglimited@gmail.com"
                  className="text-lg font-semibold text-gray-800 hover:text-[#9c1f0e] transition duration-200"
                >
                  aplusadvertisinglimited@gmail.com
                </a>
              </div>
            </div>
            {/* social medai icon */}
            <div className="w-full px-1 py-2 mt-5 flex items-center justify-center sm:justify-center md:justify-start gap-5">
              {[
                {
                  src: "/images/facebook.png",
                  url: "https://www.facebook.com/aplusadvertisingltd",
                },
                {
                  src: "/images/instagram.png",
                  url: "https://www.instagram.com/yourprofile",
                },
                {
                  src: "/images/tiktok.png",
                  url: "https://www.tiktok.com/@yourprofile",
                },
                {
                  src: "/images/linkedin.png",
                  url: "https://www.linkedin.com/in/yourprofile",
                },
              ].map((src, i) => (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={src.src}
                    alt="social icon"
                    width={25}
                    height={25}
                    unoptimized
                    className="object-contain filter drop-shadow-[0_4px_10px_rgba(50,30,0,0.9)] hover:drop-shadow-[0_6px_14px_rgba(50,30,0,0.95)] hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="w-full sm:w-full md:w-[50%] flex items-center justify-center sm:justify-center md:justify-end">
            <Image
              src="/images/contactgif.gif"
              alt="phone icon"
              width={400}
              height={400}
              unoptimized
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-col md:flex-row items-stretch py-10">
          {/* Left part (info) */}
          <div className="w-full sm:w-full md:w-[50%] flex items-center justify-center sm:justify-center md:justify-start">
            <Image
              src="/images/contact-us.gif"
              alt="phone icon"
              width={400}
              height={400}
              unoptimized
              className="object-contain"
            />
          </div>

          {/* right side */}
          <div className="w-full sm:w-full md:w-[50%] flex flex-col items-start justify-center p-0 sm:p-0 md:p-10 py-5">
            <AnimationWrapper direction="left">
              <h1 className="text-lg sm:text-xl md:text-xl font-semibold uppercase title1">
                <AnimatedText text="Message us" from="right" />
              </h1>
            </AnimationWrapper>

            <div className="w-full flex">
              <form onSubmit={handleSubmit} className="w-full universal_col">
                {/* Name */}
                <div className="w-full flex items-center gap-2 text-black text-sm mb-1">
                  <FaUser />
                  <h3 className="text-base font-semibold uppercase">name</h3>
                </div>
                <div className="w-full mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-[#0A152F] text-lg px-3 py-2 bg-transparent outline-none rounded-md shadow-[0_8px_25px_rgba(0,0,0,0.5)] focus:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition duration-300"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="w-full flex items-center gap-2 text-black text-sm mb-1">
                  <MdEmail />
                  <h3 className="text-base font-semibold uppercase">Email</h3>
                </div>
                <div className="w-full mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-[#0A152F] text-lg px-3 py-2 bg-transparent outline-none rounded-md shadow-[0_8px_25px_rgba(0,0,0,0.5)] focus:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition duration-300"
                    placeholder="Email"
                    required
                  />
                </div>

                {/* Message */}
                <div className="w-full flex items-center gap-2 text-black text-sm mb-1">
                  <RiMailSendFill />
                  <h3 className="text-base font-semibold uppercase">
                    Message us in details
                  </h3>
                </div>
                <div className="w-full">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-[#0A152F] text-lg px-3 py-2 outline-none resize-none bg-transparent rounded-md shadow-[0_8px_25px_rgba(0,0,0,0.5)] focus:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition duration-300"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="my-5 w-full flex items-center justify-center sm:justify-center md:justify-start">
                  <button
                    type="submit"
                    className={`neu-button flex items-center gap-2.5 ${
                      status === "sending"
                        ? "opacity-60 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={status === "sending"}
                  >
                    {status === "idle" && (
                      <>
                        Submit <RiMailSendFill />
                      </>
                    )}
                    {status === "sending" && "Sending..."}
                    {status === "success" && "✅ Sent Successfully"}
                    {status === "error" && "❌ Error Sending"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
