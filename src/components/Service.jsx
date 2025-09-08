"use client";
import { useEffect, useState, useMemo, useRef } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "motion/react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimationWrapper from "./AnimationWrapper";
import "../styles/service.css";

export default function Service() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setCategories(data);
        if (data.length > 0) setActiveCategory(data[0]._id);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }
    fetchCategories();
  }, []);

  // Fetch subcategories
  useEffect(() => {
    if (!activeCategory) return;
    async function fetchSubCategories() {
      setLoading(true);
      try {
        const res = await fetch(`/api/subcategories?categoryId=${activeCategory}`);
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setSubCategories(data);
      } catch (err) {
        console.error("Error fetching subcategories:", err);
        setSubCategories([]);
      } finally {
        setLoading(false);
      }
    }
    fetchSubCategories();
  }, [activeCategory]);

  // Trim description
  const trimmedSlides = useMemo(
    () =>
      subCategories.map((s) => ({
        ...s,
        description:
          s.description.split(" ").slice(0, 7).join(" ") +
          (s.description.split(" ").length > 7 ? "..." : ""),
      })),
    [subCategories]
  );

  // Responsive settings
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const faceCount = trimmedSlides.length || 1;
  const cylinderWidth = isSmall ? 1000 : 1800;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const dragFactor = 0.05;

  // Drag
  const handleDrag = (_, info) => rotation.set(rotation.get() + info.offset.x * dragFactor);
  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1 },
    });
  };

  // Autoplay
  useEffect(() => {
    if (!trimmedSlides.length) return;
    autoplayRef.current = setInterval(() => {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - 360 / faceCount);
    }, 2500);
    return () => clearInterval(autoplayRef.current);
  }, [trimmedSlides, faceCount, rotation, controls]);

  const transform = useTransform(rotation, (v) => `rotate3d(0,1,0,${v}deg)`);

  if (!categories.length) return <p className="text-center py-10">Loading categories...</p>;

  return (
    <div className="w-full universal py-10">
      <div className="fixed_width px-2 sm:px-4 md:px-6">
        {/* Heading */}
        <div className="w-full mb-8">
          <AnimationWrapper direction="left">
            <div className="w-fit flex items-center gap-3">
              <Image src="/images/service.png" alt="aplus" width={20} height={20} />
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">
                <AnimatedText text="Our Services" from="left" />
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper direction="right">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
              <AnimatedText text="Where quality meets amazing service!" from="right" />
            </h1>
          </AnimationWrapper>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Categories */}
          <div className="w-full md:w-[25%] flex flex-col gap-2">
            {categories.map((cat) => (
              <AnimationWrapper key={cat._id} direction="left">
                <div
                  onClick={() => setActiveCategory(cat._id)}
                  className={`cursor-pointer py-2 px-3 font-semibold border rounded-lg duration-300 capitalize ${
                    activeCategory === cat._id
                      ? "bg-[#9EAABD] text-white"
                      : "hover:bg-[#A2B2D1]"
                  }`}
                >
                  {cat.name}
                </div>
              </AnimationWrapper>
            ))}
          </div>

          {/* 3D Gallery */}
          <div className="w-full md:w-[75%] relative border">
            {loading ? (
              <p className="text-center py-10">Loading subcategories...</p>
            ) : trimmedSlides.length > 0 ? (
              <div className="gallery-container">
                <motion.div
                  drag="x"
                  className="gallery-track"
                  style={{ transform: transform, width: cylinderWidth, transformStyle: "preserve-3d" }}
                  onDrag={handleDrag}
                  onDragEnd={handleDragEnd}
                  animate={controls}
                >
                  {trimmedSlides.map((slide, i) => {
                    const angle = (i * 360) / faceCount;
                    return (
                      <div
                        key={i}
                        className="gallery-item"
                        style={{
                          width: `${faceWidth}px`,
                          transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                        }}
                      >
                        <img src={slide.image} alt={slide.title} />
                        <h3 className="gallery-title">{slide.title}</h3>
                        <p className="gallery-description">{slide.description}</p>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            ) : (
              <p className="text-center py-10 text-gray-500">No subcategories found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
