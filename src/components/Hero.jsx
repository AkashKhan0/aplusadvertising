"use client";

import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import "../styles/globals.css";
import Image from "next/image";
import AnimationWrapper from "@/components/AnimationWrapper";
import ButtonLink from "@/components/ButtonLink";
import Clock from "./Clock";
import TypingText from "./TypingText";

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
      <div className="flex flex-col items-center justify-center bg-[#FAF9D0]">
        <div className="w-full universal">
          <div className="fixed_width flex flex-col sm:flex-col md:flex-row items-stretch sm:items-center md:items-center justify-between h-fit py-24 gap-5 px-5 sm:px-2 md:px-2">
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
                  <div className="w-full">
                    {" "}
                    <TypingText />{" "}
                  </div>
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
            <div className="flex flex-col items-center justify-center w-full sm:w-full md:w-[50%] px-5 sm:px-2 md:px-2">
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

      <div className="w-full universal py-20 bg-[#F1E3A4]">
        <div className="fixed_width flex flex-col items-center justify-center gap-5 px-5 sm:px-2 md:px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold flex flex-col items-center justify-center text-center mb-5">
            <AnimatedText
              text="Empowering Your Growth with Innovation;"
              from="right"
            />
            <AnimatedText
              text="Building Bangladesh’s Digital Future."
              from="right"
            />
          </h1>
          <p className="text-base md:text-lg text-justify">
            A Plus Advertising Limited is proudly recognized as one of the best
            IT and digital marketing companies in Bangladesh, offering
            high-performing and result-driven digital solutions for clients
            worldwide. As a leading web development company in Dhaka, we
            specialize in website design, SEO services, eCommerce development,
            and online marketing, helping brands grow faster and reach their
            target audience effectively.
          </p>
          <p className="text-base md:text-lg text-justify">
            Our expert team of developers and digital marketers combines
            creativity, strategy, and technology to deliver world-class web
            experiences. We use the latest frameworks and tools like Next.js,
            React.js, Tailwind CSS, Node.js, MongoDB, and WordPress to build
            fast, secure, and SEO-friendly websites that convert visitors into
            loyal customers. With years of proven experience and a 100% client
            satisfaction rate, A Plus Advertising Limited has become a trusted
            digital partner in Bangladesh. Clients choose us because we
            prioritize transparency, performance, and long-term results over
            short-term gain. Whether you’re a startup or an established
            enterprise, our mission is to help your business stand out online
            through powerful SEO, targeted digital marketing campaigns, and
            custom web solutions that drive measurable success. From search
            engine optimization (SEO) to Google Ads, social media marketing, and
            full-scale web development, we ensure every project we deliver
            enhances your online visibility and business growth.
          </p>
          <p className="text-base md:text-lg text-justify">
            At A Plus Advertising Limited, we believe in more than just
            technology; we believe in innovation that transforms businesses.
            That’s why clients across Bangladesh and beyond trust us as the best
            web development and SEO company in Bangladesh, where creativity
            meets performance, and ideas turn into success.
          </p>
        </div>
      </div>

      <div className="w-full universal py-20 bg-[#FAF9D0]">
        <div className="fixed_width flex flex-col items-center justify-center gap-5 px-5 sm:px-2 md:px-2">
            <div className="w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center flex flex-col">
                <AnimatedText
                  text="Why a Website and SEO Are Essential"
                  from="right"
                />
                <AnimatedText text="For Every Business Today?" from="right" />
              </h1>
            </div>
            <div className="w-full">
                <div className="float-left w-[30%] min-w-[300px] mr-3"
                      // style={{ shapeOutside: "circle()", clipPath: "circle()" }}
                      >
                  <Image
                      src="/images/webseo.gif"
                      alt="why-website-seo"
                      width={50}
                      height={50}
                      unoptimized
                      className={`w-full h-full object-contain`}
                    />
                </div>
              <p className="text-base md:text-lg text-justify">
                In today’s fast-moving digital world, your website is not just a
                virtual address; it’s your brand’s first impression, sales
                engine, and trust builder. Whether you run a small business or a
                large organization, having a professionally designed website is
                essential to stay competitive, connect with customers, and grow
                your brand online.
              </p>
              <p className="text-base md:text-lg text-justify my-3">
                A well-developed website allows you to showcase your products,
                services, and brand identity 24/7 to a global audience. It
                builds credibility, trust, and authority, making potential
                customers more confident in choosing your business over
                competitors. Without a strong website, you risk losing leads,
                visibility, and market share to brands that already have an
                established digital presence. However, just having a website
                isn’t enough; that’s where SEO (Search Engine Optimization)
                comes in. SEO helps your website appear on Google’s first page,
                where 90% of customers start their online journey. By optimizing
                your content with the right keywords, improving website speed,
                and maintaining mobile responsiveness, SEO ensures your business
                gets found by the right audience at the right time.
              </p>
              <p className="text-base md:text-lg text-justify">
                At A Plus Advertising Limited, we understand that a strong
                online presence begins with an optimized website. Our
                professional web development and SEO experts create fast,
                user-friendly, and search engine–optimized websites that drive
                organic traffic, boost brand awareness, and increase conversion
                rates. Investing in SEO is no longer optional; it’s the
                foundation of every successful digital marketing strategy. With
                the right SEO techniques, your business can reach more
                customers, achieve long-term visibility, and outperform
                competitors in Bangladesh’s growing digital landscape.
              </p>
              <p className="text-base md:text-lg text-justify my-2">
                That’s why brands choose A Plus Advertising Limited; the best
                web development and SEO company in Bangladesh to build powerful
                websites that don’t just look amazing, but actually rank,
                perform, and grow revenue.
              </p>
              
              
              </div>
        </div>
      </div>
    </>
  );
}
