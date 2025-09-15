"use client";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import Service from "@/components/Service";
import "../../styles/globals.css";
import Loaders from "@/components/Loaders";
import LogoSlider from "@/components/LogoSlider";
import Projects from "@/components/Projects";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 sec loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loaders />;

  return (
    <>
      <div className="w-full flex flex-col mb-[60px] overflow-hidden">
        <Hero />
        <Service />
        <Projects />
        <LogoSlider/>
      </div>
    </>
  );
}
