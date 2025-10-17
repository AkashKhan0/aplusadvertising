"use client";
import { useEffect, useState } from "react";

import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import ButtonLink from "@/components/ButtonLink";

export default function About() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/partners");
      const data = await res.json();
      setPartners(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <>
      <div className="universal mb-[50px]">
        <div className="fixed_width px-5 sm:px-2 md:px-2">
          <div className="my-5">
            <AnimationWrapper direction="left">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
                <AnimatedText text="About Us" from="right" />
              </h1>
              <p className="text-center text-lg font-medium my-5">
                Welcome to “A plus Advertising ” , a proud sub-brand of “A plus
                Communication”, established in 2024. We specialize in delivering
                high-quality services, ensuring value for your investment, and
                always adhering to timely work for maximum client satisfaction.
                Our commitment extends beyond just results; we’re here to
                provide unmatched client support every step of the way. Let’s
                keep it simple, stay focused, and together, be unstoppable in
                achieving your business goals. Get in touch today to transform
                your ideas into reality!
              </p>
            </AnimationWrapper>

            <AnimationWrapper direction="left">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center title1">
                <AnimatedText text="Our Team Members" from="right" />
              </h1>
            </AnimationWrapper>

            {/* partner details */}
            <div className="space-y-4">
              {loading && (
                <p className="text-center text-gray-500">Loading...</p>
              )}

              {!loading && partners.length === 0 && (
                <p className="text-center text-gray-500">No partners found</p>
              )}

              <div className="w-full py-5 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                {!loading &&
                  partners.map((p) => (
                    <div
                      key={p._id}
                      className="overflow-hidden h-fit duration-300 cursor-pointer rounded text-center bg-[#000000be]"
                    >
                      <div className="flex flex-col items-center gap-3 rounded">
                        
                        {/* cover photo */}
                      <div className="w-full h-[150px] top-0 left-0">
                        <img
                          src={p.profilePicture}
                          alt={p.name}
                          className="inset-0 w-full h-full object-cover object-top"
                        />
                      </div>
                        <div className="flex w-full items-center gap-3 py-1 px-2 relative">
                          <div className="w-[100px] h-[100px] rounded-full mt-[-50px]">
                          <img
                            src={p.profilePicture}
                            alt={p.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="text-start">
                          <h1 className="text-xl text-[#fff] font-semibold capitalize leading-[20px]">{p.name}</h1>
                          <p className="text-base font-medium text-[#fff] capitalize">{p.title}</p>
                        </div>
                        </div>
                      </div>
                      <p className="text-[#fff] text-lg line-clamp-2 my-5">
                        {p.description || "No description available."}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          
          {/* Call to Action Section */}
          <div className="my-20">
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

              <div className="w-full flex items-center justify-center gap-5 mt-5">
                <ButtonLink href="/contact" text="Contact Us" />
              </div>
            </AnimationWrapper>
          </div>


        </div>
      </div>
    </>
  );
}
