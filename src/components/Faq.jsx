"use client";
import { useEffect, useState } from "react";
import AnimationWrapper from "./AnimationWrapper";
import AnimatedText from "./AnimatedText";
import { IoIosArrowDown,IoIosArrowForward } from "react-icons/io";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchFaqs();
  }, []);

  async function fetchFaqs() {
    try {
      const res = await fetch("/api/faq");
      const data = await res.json();
      if (data.success) {
        setFaqs(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch FAQs", err);
    }
  }

  function toggleFAQ(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <>
      <div className="w-full universal">
        <div className="fixed_width px-5 sm:px-2 md:px-2">
          <AnimationWrapper direction="left">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
              <AnimatedText text="FAQ" from="right" />
            </h1>
            <h1 className="text-lg sm:text-xl md:text-2xl title1 py-2">
              <AnimatedText
                text="Got questions? We’ve got answers."
                from="left"
              />
            </h1>
          </AnimationWrapper>
            <div className="flex flex-col gap-4 mb-5">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={faq._id}
                    className="shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-800"
                    >
                      <span className="text-xl font-bold">{faq.question}</span>
                      {isOpen ? (
                        <IoIosArrowForward className="w-5 h-5 text-gray-500" />
                      ) : (
                        <IoIosArrowDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-40 px-4 py-2 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden text-gray-600`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </>
  );
}
