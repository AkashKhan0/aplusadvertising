"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

export default function Process() {
  const steps = [
    { name: "Analyze", img: "/images/analyze.gif" },
    { name: "Planning", img: "/images/planing.gif" },
    { name: "Design", img: "/images/design.gif" },
    { name: "Development", img: "/images/develop.gif" },
    { name: "Testing", img: "/images/testing.gif" },
    { name: "Lunching", img: "/images/launch.gif" },
    { name: "Support", img: "/images/support.gif" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <>
      <div className="w-full universal py-10 bg-[#F1E3A4]">
        <div className="fixed_width px-5 sm:px-4 md:px-2 lg:px-0">
          <div className="w-full text-black overflow-hidden">
            <h1 className="text-xl sm:text-xl md:text-2xl font-bold uppercase flex items-center justify-center text-center my-2">
              <AnimatedText text="Our Working Process" from="left" />
            </h1>
            <p className="text-lg text-center">
              From strategy to execution, our working process is crafted to
              deliver excellence with creativity and precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={step.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      y: 0,
                      // scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`w-full h-fit p-2 flex flex-col items-center justify-between rounded-xl text-center transition-all
                ${
                  isActive
                    ? "bg-[#FAF9D0] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                    : "bg-[#FAF9D0] shadow-lg"
                }`}
                  >
                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src={step.img}
                        alt={step.name}
                        width={60}
                        height={60}
                        unoptimized
                        className="object-contain w-full h-[150px]"
                      />
                    </div>

                    {/* Text */}
                    <p
                      className={`mt-2 text-lg font-semibold ${
                        isActive ? "text-black" : "text-[#181520]"
                      }`}
                    >
                      {step.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
