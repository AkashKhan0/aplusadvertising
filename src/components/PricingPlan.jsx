"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import ButtonLink from "./ButtonLink";

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState("website");

  const websitePlans = [
    {
      title: "Basic Website",
      description: "1-3 page, Single-page portfolio or landing page",
      tech: "HTML, CSS, JS",
      price: 10000,
    },
    {
      title: "Standard Website",
      description: "5–7 page business website with contact form",
      tech: "React.js / Next.js",
      price: 20000,
    },
    {
      title: "WordPress Website",
      description: "Custom WordPress website with theme setup & plugins",
      tech: "WordPress CMS",
      price: 15000,
    },
    {
      title: "E-commerce Website",
      description: "Full e-commerce with admin panel & payment gateway",
      tech: "Next.js / WooCommerce",
      price: 30000,
    },
  ];

  const seoPlans = [
    {
      title: "Basic SEO",
      description: "Keyword research, meta setup, on-page optimization",
      price: 5000,
    },
    {
      title: "Advanced SEO",
      description:
        "Technical SEO, link building, site audit, speed optimization",
      price: 10000,
    },
    {
      title: "Local SEO",
      description: "Google My Business optimization, maps ranking",
      price: 7000,
    },
    {
      title: "E-commerce SEO",
      description:
        "Product keyword strategy, schema setup, conversion optimization",
      price: 15000,
    },
  ];

  const marketingPlans = [
    {
      title: "Social Media Marketing",
      description: "Facebook, Instagram & LinkedIn brand campaigns",
      price: 8000,
    },
    {
      title: "Google Ads Campaign",
      description: "Search & display ad setup and optimization",
      price: 10000,
    },
    {
      title: "Content Marketing",
      description: "Blog & social content strategy with copywriting",
      price: 7000,
    },
    {
      title: "Email Marketing",
      description: "Lead generation and automated email flows",
      price: 5000,
    },
  ];

  const getPlans = () => {
    if (activeTab === "website") return websitePlans;
    if (activeTab === "seo") return seoPlans;
    if (activeTab === "marketing") return marketingPlans;
  };

  return (
    <>
      <div className="w-full universal py-10 bg-[#F1E3A4]">
        <div className="fixed_width px-5">
          <section className="text-[#222]">
            <div className="w-full text-center px-4">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase flex items-center justify-center text-center my-2">
                <AnimatedText text="Our Pricing Plans" from="left" />
              </h1>
              <p className="text-[#222] mb-10 text-lg">
                Choose the right plan that fits your business needs. Transparent
                pricing, no hidden costs.
              </p>

              {/* Category Tabs */}
              <div className="flex justify-center gap-3">
                {["website", "seo", "marketing"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full capitalize transition-all duration-300 text-lg font-semibold ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-[#0A152F] to-[#9c1f0e] text-white shadow-lg border-2"
                        : "bg-[#0a152f00] border-2 border-[#0A152F] hover:bg-[#0A152F] text-[#0A152F] hover:text-[#fff]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Pricing Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer py-20">
                {getPlans().map((plan, index) => (
                  <div
                    key={index}
                    className="bg-[#FAF9D0] rounded-md p-5 flex flex-col items-center justify-start w-full duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg mx-auto cursor-pointer"
                  >
                    <h3 className="text-2xl font-semibold mb-4">
                      {plan.title}
                    </h3>
                    <p className="text-[#0A152F] text-base font-semibold mb-2">{plan.description}</p>
                    {plan.tech && (
                      <p className="text-lg text-[#0A152F] font-semibold mb-2">
                        <span className="font-lg text-[#9c1f0e]">
                          Tech:
                        </span>{" "}
                        {plan.tech}
                      </p>
                    )}
                    <p className="text-xl font-bold text-[#9c1f0e] mb-6">
                      ৳- {plan.price.toLocaleString()}/- Only
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="w-full flex items-center justify-center mb-5">
                <ButtonLink href="/contact" text="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
