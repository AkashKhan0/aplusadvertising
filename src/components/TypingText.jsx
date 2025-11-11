"use client";

import React from "react";
import { ReactTyped } from "react-typed";

const TypingText = () => {
  return (
    <div className="text-lg sm:text-xl font-semibold text-start text-[#222] flex items-center gap-2">
      <p className="text-[#0A152F]">We provide{" "}</p>
      <p className="text-[#0A9AFD] font-bold">
        <ReactTyped
        strings={[
          "Web Design",
          "Web Development",
          "SEO Optimization",
          "Digital Marketing",
          "Brand Strategy",
        ]}
        typeSpeed={100}     // typing speed
        backSpeed={50}      // backspacing speed
        loop                // will repeat infinitely
        backDelay={1500}    // delay before deleting
        smartBackspace
      />
      </p>
    </div>
  );
};

export default TypingText;
