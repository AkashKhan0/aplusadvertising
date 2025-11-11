"use client";
import { useEffect, useState } from "react";
import AnimationWrapper from "./AnimationWrapper";
import AnimatedText from "./AnimatedText";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetchFaqs();
    fetchLogos();
  }, []);

  // 🔹 Fetch logos from DB
  const fetchLogos = async () => {
    const res = await fetch("/api/clientlogos");
    const data = await res.json();
    setLogos(data);
  };

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
      <div className="w-full universal bg-[#FAF9D0] pt-10">
        <div className="fixed_width px-5 sm:px-2 md:px-2">
          <AnimationWrapper direction="left">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
                <AnimatedText text="Our Clients" from="right" />
              </h1>
              <h1 className="text-lg sm:text-xl md:text-2xl title1 py-2 text-center">
                <AnimatedText
                  text="Trusted by leading brands worldwide."
                  from="left"
                />
              </h1>
            </div>
          </AnimationWrapper>

          {/* our client images section */}
          <div className="w-full flex items-center justify-center">
            {logos.length === 0 ? (
              <p className="text-gray-500 text-base">No logos found yet.</p>
            ) : (
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 py-10">
                {logos.map((logo) => (
                  <div
                    key={logo._id}
                    className="w-full h-[120px] flex items-center justify-center p-2"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="w-full h-full object-contain transition-all duration-300 ease-in-out filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="w-full universal bg-[#F1E3A4] py-10">
        <div className="fixed_width px-5 sm:px-2 md:px-2">
          <AnimationWrapper direction="left">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                <AnimatedText text="FAQ" from="right" />
              </h1>
              <h1 className="text-lg sm:text-xl md:text-2xl title1 py-2">
                <AnimatedText
                  text="Got questions? We’ve got answers."
                  from="left"
                />
              </h1>
            </div>
          </AnimationWrapper>
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col gap-4 mb-5 w-full sm:w-[80%] md:w-[70%]">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={faq._id} className="shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex flex-col items-center justify-center px-4 py-3 font-medium text-gray-800"
                    >
                      <span className="text-xl font-bold">{faq.question}</span>
                      {isOpen ? (
                        <IoIosArrowUp className="w-5 h-5 text-[#222]" />
                      ) : (
                        <IoIosArrowDown className="w-5 h-5 text-[#222]" />
                      )}
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-40 px-4 py-2 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden text-gray-600 text-center`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
