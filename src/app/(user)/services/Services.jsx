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
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";

export default function Services() {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSub, setSelectedSub] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  // fetch all subcategories
  const fetchSubCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/subcategories");
      const data = await res.json();
      setSubCategories(data);
    } catch (err) {
      console.error("Error fetching subcategories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <>
      <div className="universal my-10">
        <div className="fixed_width px-5 sm:px-2 md:px-2">
          <div className="universal_col">
            <AnimationWrapper direction="left">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                <AnimatedText
                  text="We Build, Rank & Market Your Brand"
                  from="right"
                />
              </h1>
              <p className="text-justify text-lg font-medium my-5">
                A Plus Advertising Limited helps your business grow through
                professional Website Development, SEO, and Digital Marketing
                services. We design high-performing websites that strengthen
                your brand identity, implement SEO strategies that boost your
                Google rankings, and launch data-driven marketing campaigns that
                attract the right customers.
              </p>
              <p className="text-justify text-lg font-medium my-2">
                Our approach turns online visibility into measurable growth;
                every project is built for speed, SEO, and long-term success.
                Choosing A Plus means partnering with experts who focus on
                results, reliability, and return on investment, not just clicks.
              </p>
            </AnimationWrapper>

            <div className="mt-10 w-full">
              {/* ✅ Loading State */}
              {loading ? (
                <div className="flex items-center justify-center py-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-3 text-gray-600 font-medium">
                      Loading subcategories...
                    </p>
                  </div>
                </div>
              ) : subCategories.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {subCategories.map((sub) => (
                    <div key={sub._id} className="flex flex-col duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg cursor-pointer">
                      {/* Top Bar */}

                      {/* Card Body */}
                      <div className="flex flex-col items-center justify-center text-center h-full py-5">
                        <div className="w-full h-34 flex-shrink-0">
                          <img
                            src={sub.image}
                            alt={sub.title}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex-1 flex flex-col px-5">
                          <h1 className="text-lg sm:text-xl md:text-xl font-semibold text-center">
                            <AnimatedText text={sub.title} from="right" />
                          </h1>
                          <p className="text-sm text-gray-600">
                            {sub.description.split(" ").slice(0, 15).join(" ")}
                            {sub.description.split(" ").length > 15 && "..."}
                          </p>
                        </div>

                        <button
                          className="neu-button mt-3"
                          onClick={() => setSelectedSub(sub)}
                        >
                          {sub.buttonText}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No subcategories found.
                </p>
              )}
            </div>

            {/* Popup Modal */}
            {selectedSub && (
              <div className="fixed inset-0 bg-[#a2b2d1b4] bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#d7e6fd] w-[90%] max-w-lg p-6 rounded-lg relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 border z-50"
                    onClick={() => setSelectedSub(null)}
                  >
                    <IoMdClose size={28} />
                  </button>

                  {/* Popup Content */}
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
      </div>
    </>
  );
}
