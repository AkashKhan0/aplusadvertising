"use client";

import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import { GoDash } from "react-icons/go";
import { VscChromeMaximize } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import { MdMoreHoriz } from "react-icons/md";
import ButtonLink from "@/components/ButtonLink";

export default function Services() {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSub, setSelectedSub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch Subcategories
  const fetchSubCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/subcategories", { cache: "no-store" });

      if (!res.ok) {
        const errText = await res.text();
        console.error("❌ API Error:", res.status, errText);
        throw new Error("Failed to fetch subcategories");
      }

      const text = await res.text(); // first get raw text
      if (!text) throw new Error("Empty response from server");

      const data = JSON.parse(text); // safely parse manually

      if (!Array.isArray(data)) {
        console.error("⚠️ Unexpected data format:", data);
        throw new Error("API did not return a list");
      }

      setSubCategories(data);
    } catch (err) {
      console.error("Error fetching subcategories:", err);
      setError(err.message);
      setSubCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <div className="universal mb-[50px]">
      <div className="fixed_width px-5 sm:px-2 md:px-2">
        <div className="universal_col p-5">
          {/* ---------- Header Section ---------- */}
          <AnimationWrapper direction="left">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
              <AnimatedText
                text="We Build, Rank & Market Your Brand!"
                from="right"
              />
            </h1>
            <p className="text-center text-lg font-medium my-5">
              At A Plus Advertising Limited, we help businesses grow with
              professional Website Development, SEO, and Marketing services. A
              powerful website builds your brand identity, SEO ensures
              visibility on search engines, and strategic marketing brings
              customers directly to you. Choosing us means measurable results,
              long-term success, and services crafted better than the rest.
            </p>
          </AnimationWrapper>

          {/* ---------- Subcategory Grid ---------- */}
          <div className="mt-10 p-5 w-full">
            {loading ? (
              // 🌀 Loading Spinner
              <div className="flex items-center justify-center py-10">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-3 text-gray-600 font-medium">
                    Loading subcategories...
                  </p>
                </div>
              </div>
            ) : error ? (
              // ❌ Error Message
              <p className="text-center text-red-500 font-medium py-10">
                {error}
              </p>
            ) : subCategories.length > 0 ? (
              // 🟩 Subcategory Cards
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {subCategories.map((sub) => (
                  <div key={sub._id} className="flex flex-col">
                    {/* ---------- Top Bar ---------- */}
                    <div className="bg-[#707070] relative flex flex-col w-full">
                      <div className="px-2 pt-1 flex items-start justify-between">
                        <div className="w-[50%] bg-[#9c9c9c] rounded-tl-lg rounded-tr-lg flex items-center justify-between px-2 text-white text-[12px]">
                          <p>APlus Advertising</p>
                          <IoMdClose />
                        </div>
                        <div className="w-[50%] flex items-center justify-end gap-2.5 text-sm text-white">
                          <GoDash />
                          <VscChromeMaximize />
                          <IoMdClose />
                        </div>
                      </div>

                      <div className="px-2 py-1 bg-[#9c9c9c] flex items-center justify-between gap-2.5">
                        <div className="flex items-center text-white text-sm gap-2.5">
                          <IoIosArrowBack />
                          <IoIosArrowForward />
                          <GrRefresh />
                        </div>
                        <div className="rounded-full bg-[#707070] flex items-center gap-2.5 text-white px-2 text-[12px]">
                          <p>
                            {sub.title.length > 10
                              ? sub.title.slice(0, 10) + "..."
                              : sub.title}
                          </p>
                          <IoMdClose />
                        </div>
                        <div className="text-white">
                          <MdMoreHoriz />
                        </div>
                      </div>
                    </div>

                    {/* ---------- Card Body ---------- */}
                    <div className="bg-[#A2B2D1] p-5 flex flex-col items-center justify-center text-center h-full">
                      <div className="w-full h-28 flex-shrink-0">
                        <img
                          src={sub.image}
                          alt={sub.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <h1 className="text-lg sm:text-xl md:text-xl font-semibold text-center my-2">
                          <AnimatedText text={sub.title} from="right" />
                        </h1>
                        <p className="text-sm text-gray-600">
                          {sub.description
                            ?.split(" ")
                            .slice(0, 15)
                            .join(" ")}
                          {sub.description?.split(" ").length > 15 && "..."}
                        </p>
                      </div>

                      <button
                        className="text-sm border mt-4 px-5 py-1 hover:bg-blue-100 transition"
                        onClick={() => setSelectedSub(sub)}
                      >
                        {sub.buttonText || "View Details"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // 🟨 Empty State
              <p className="text-gray-500 text-center py-10">
                No subcategories found.
              </p>
            )}
          </div>

          {/* ---------- Modal Popup ---------- */}
          {selectedSub && (
            <div className="fixed inset-0 bg-[#a2b2d1b4] bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-[#d7e6fd] w-[90%] max-w-lg p-6 rounded-lg relative shadow-lg">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-600 border rounded-full p-1 z-50"
                  onClick={() => setSelectedSub(null)}
                >
                  <IoMdClose size={22} />
                </button>

                <div className="relative">
                  <img
                    src={selectedSub.image}
                    alt={selectedSub.title}
                    className="w-28 h-28 object-cover rounded-full mb-4 float-left mr-5"
                  />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    {selectedSub.title}
                  </h2>
                  <p className="text-gray-700">{selectedSub.description}</p>
                </div>

                <div className="w-full mt-5 flex items-center justify-center">
                  <ButtonLink href="/contact" text="Contact Us" />
                </div>
              </div>
            </div>
          )}

          {/* ---------- Bottom Section ---------- */}
          <div className="mt-10">
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
    </div>
  );
}
