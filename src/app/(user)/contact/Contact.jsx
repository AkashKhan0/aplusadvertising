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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    <div className="universal mb-[50px]">
      <div className="fixed_width px-5 sm:px-2 md:px-2">
        <AnimationWrapper direction="left">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center my-5">
            <AnimatedText text="Contact Us" from="right" />
          </h1>
          <p className="text-center text-lg font-medium mb-2">
            We’d love to hear from you! Whether you have a question about our
            services, need assistance, or just want to share your feedback,
            our team is here to help. Fill out the form below or reach out to
            us directly through email or phone. We’ll get back to you as soon
            as possible and make sure your experience with us is smooth and
            satisfying.
          </p>
        </AnimationWrapper>

        <div className="my-5 w-full flex items-center justify-center p-2">
          <div className="p-2 w-[80%] sm:w-[80%] md:w-[500px] h-fit relative bg-[#1e1e1e64] cntfrmcrd duration-500 [transform-style:preserve-3d] perspective-1000 cursor-pointer my-10">
            
            {/* Left side */}
            <div className="w-[100%] sm:w-[90%] md:w-[400px] h-full absolute top-0 left-0 bg-[#1e1e1edf] duration-500 cntleft border-r-2 border-r-[#ffffff75] p-2 sm:p-5 z-50">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center my-2 uppercase text-white">
                <AnimatedText text="get in touch" from="right" />
              </h1>

              <div className="w-full universal_col gap-5 text-white">
                {/* Email */}
                <div className="w-full flex items-center gap-2.5">
                  <div className="universal min-w-[30px] h-[30px] rounded-full border border-[#fff]">
                    <MdEmail />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-base sm:text-lg md:text-lg font-semibold uppercase">email :</h1>
                    <p className="text-[11px] sm:text-[13px] md:text-base">aplusadvertisinglimited@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="w-full flex items-center gap-2.5">
                  <div className="universal min-w-[30px] h-[30px] rounded-full border border-[#fff]">
                    <MdEmail />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-base sm:text-lg md:text-lg font-semibold uppercase">phone :</h1>
                    <p className="text-[11px] sm:text-[13px] md:text-base">+8801850219432</p>
                  </div>
                </div>

                {/* Location */}
                <div className="w-full flex items-center gap-2.5">
                  <div className="universal min-w-[30px] h-[30px] rounded-full border border-[#fff]">
                    <MdEmail />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-base sm:text-lg md:text-lg font-semibold uppercase">location :</h1>
                    <p className="text-[11px] sm:text-[13px] md:text-base">214, Tejgaon Ind.Area, Tejgaon, Dhaka-1208</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="w-[50px] sm:w-[70px] md:w-[100px] h-full absolute top-0 right-0 bg-[#1e1e1edf] duration-500 cntright border-l-2 border-l-[#ffffff75]">
              <div className="w-full h-full flex flex-col items-center justify-center gap-5 text-white">
                <Link href="/" className="social_icons"><FaFacebookSquare className="s_icon" /></Link>
                <Link href="/" className="social_icons"><FaInstagramSquare className="s_icon" /></Link>
                <Link href="/" className="social_icons"><FaLinkedin className="s_icon" /></Link>
                <Link href="/" className="social_icons"><FaYoutube className="s_icon" /></Link>
              </div>
            </div>

            {/* Middle part (form) */}
            <div className="universal_col z-10 cursor-auto">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center my-2 uppercase text-white opacity-5 msgus duration-1000 py-5">
                <AnimatedText text="message us" from="right" />
              </h1>

              <form onSubmit={handleSubmit} className="w-full universal_col gap-2.5">
                {/* Name */}
                <div className="w-full flex items-start border">
                  <div className="frm_icon w-[20px] h-[20px] text-black universal text-sm">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-white text-lg px-2 cursor-cell bg-transparent outline-none"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="w-full flex items-start border">
                  <div className="frm_icon w-[20px] h-[20px] text-black universal text-sm">
                    <MdEmail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-white text-lg px-2 cursor-cell bg-transparent outline-none"
                    placeholder="Email"
                    required
                  />
                </div>

                {/* Message */}
                <div className="w-full flex items-start border">
                  <div className="frm_icon w-[20px] h-[20px] text-black universal text-sm">
                    <RiMailSendFill />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full text-white text-lg px-2 outline-none resize-none cursor-cell bg-transparent"
                    placeholder="Your message..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="my-5">
                  <button
                    type="submit"
                    className={`flex items-center gap-3 uppercase px-2.5 border duration-300 hover:text-white ${
                      status === "sending" ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                    disabled={status === "sending"}
                  >
                    {status === "idle" && <>Submit <RiMailSendFill /></>}
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
