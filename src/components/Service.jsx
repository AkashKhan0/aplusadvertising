"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimationWrapper from "./AnimationWrapper";

export default function Service() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="w-full universal">
        <div className="fixed_width py-5 px-2 sm:px-2 md:px-2">
          {/* services heading */}
          <div className="w-full ">
            <AnimationWrapper direction="left">
              <div className="w-fit flex items-center justify-center gap-3">
                <Image
                  src="/images/service.png"
                  alt="aplus"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] mt-[-5px]"
                />
                <h1 className="text-lg sm:text-xl md:text-xl font-bold uppercase">
                  <AnimatedText text="Our Services" from="left" />
                </h1>
              </div>
            </AnimationWrapper>

            <AnimationWrapper direction="right">
              <div className="w-fit">
                <h1 className="text-2xl sm:text-3xl md:text-5xl title1 font-bold">
                  <AnimatedText
                    text="Where quality meets amazing service!"
                    from="right"
                  />
                </h1>
              </div>
            </AnimationWrapper>
          </div>

          {/* services content */}
          <div className="mt-2">
            <div className="w-full flex flex-col sm:flex-col md:flex-row items-stretch justify-stretch gap-5 sm:gap-5 md:gap-2.5 py-5">
              {/* left side categorys title */}
              <div className="left w-full sm:w-full md:w-[30%] flex flex-col gap-2">
                {categories.map((cat) => (
                  <AnimationWrapper direction="left" key={cat._id}>
                    <div className="border py-1 px-2 font-semibold text-lg w-full cursor-pointer hover:bg-[#9EAABD] duration-300 capitalize">
                      <h1>{cat.name}</h1>
                    </div>
                  </AnimationWrapper>
                ))}
              </div>

              {/* right side component contents */}
              <div className="right w-full sm:w-full md:w-[70%]">
                <AnimationWrapper direction="right">
                  <div className="w-full h-full border py-1 px-2">
                    <div className=""><h1>Slider</h1></div>
                  </div>
                </AnimationWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
