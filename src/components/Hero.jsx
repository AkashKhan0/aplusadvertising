"use client";

import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import "../styles/globals.css";
import Image from "next/image";
import AnimationWrapper from "@/components/AnimationWrapper";
import ButtonLink from "@/components/ButtonLink";
import Clock from "./Clock";

export default function Hero() {
  const images = [
    "/images/seo.png",
    "/images/coding.png",
    "/images/marketing.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="w-full universal">
          <div className="fixed_width flex flex-col sm:flex-col md:flex-row items-stretch sm:items-center md:items-center justify-between h-fit py-24 gap-5 px-2 sm:px-2 md:px-2">
            {/* left side */}
            <div className="w-full sm:w-full md:w-[50%] flex flex-col items-center sm:items-center md:items-start justify-center">
              <AnimationWrapper direction="left">
                <div className="w-full text-center sm:text-center md:text-start">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    <AnimatedText
                      text="Excellence in Business & Communication"
                      from="right"
                    />
                  </h1>
                  <h1 className="text-3xl sm:text-5xl md:text-7xl title1 py-2 font-bold">
                    <AnimatedText
                      text="Aplus Advertising Limited"
                      from="left"
                    />
                  </h1>
                </div>
              </AnimationWrapper>
              <div className="w-full mt-5">
                <AnimationWrapper direction="left">
                  <div className="w-full flex items-center justify-center sm:justify-center md:justify-start gap-3">
                    <ButtonLink href="/contact" text="Contact Us" />
                    <ButtonLink href="/plans" text="Choose a plan" />
                  </div>
                </AnimationWrapper>
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col items-center justify-center w-full sm:w-full md:w-[50%] px-2 sm:px-2 md:px-2">
              <AnimationWrapper direction="right">
                <div className="w-[250px] h-[150px] relative overflow-hidden">
                  {images.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`slider-${index}`}
                      width={180}
                      height={50}
                      unoptimized
                      className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-2000 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </AnimationWrapper>
              <AnimationWrapper direction="right">
                <div className="w-full h-full">
                  <Clock />
                </div>
              </AnimationWrapper>
              <AnimationWrapper direction="right">
                <h1 className="text-lg sm:text-xl md:text-2xl title1 py-2">
                  <AnimatedText
                    text="The world is moving fast, are you keeping up?"
                    from="right"
                  />
                </h1>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
