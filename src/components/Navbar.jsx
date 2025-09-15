"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Image from "next/image";
import { AiOutlineCaretUp } from "react-icons/ai";
import { TbHomeFilled } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { LiaBlogSolid } from "react-icons/lia";
import { FaDiagramProject } from "react-icons/fa6";
import { HiTemplate } from "react-icons/hi";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { RiInfoCardFill } from "react-icons/ri";
import { MdConnectWithoutContact } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start * (1 - easeInOutCubic));

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <nav className="bg-[#232f3e44] backdrop-blur-[5px] shadow-md fixed bottom-0 left-0 w-full z-50 flex items-center justify-center h-[50px] universal">
      {/* ei navbar section shudhu matro desktop view er jonno */}
      <div className="w-full fixed_width desktop_view mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src="/logo.png"
            alt="My Business Logo"
            width={180}
            height={50}
            className="w-[70px] h-[40px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1 text-lg font-semibold">
          <li>
            <Link href="/services" prefetch={true} className="nav_items">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" prefetch={true} className="nav_items">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/projects" prefetch={true} className="nav_items">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/templates" prefetch={true} className="nav_items">
              Templates
            </Link>
          </li>
          <li>
            <Link href="/plans" prefetch={true} className="nav_items">
              Your Plans
            </Link>
          </li>
          <li>
            <Link href="/about" prefetch={true} className="nav_items">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" prefetch={true} className="nav_items">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/profile" prefetch={true} className="nav_items">
              Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* ei section Mobile view er jonno */}
      <div className="w-full mobile_view">
          <div className="w-full flex items-center justify-center gap-5">
            <Link href="/" prefetch={true} className="mobile_nav_items text-xl">
              <TbHomeFilled />
            </Link>
            <Link href="/services" prefetch={true} className="mobile_nav_items text-xl">
              <GrServices />
            </Link>
            <Link href="/blogs" prefetch={true} className="mobile_nav_items text-xl">
              <LiaBlogSolid />
            </Link>
            <Link href="/projects" prefetch={true} className="mobile_nav_items text-xl">
              <FaDiagramProject />
            </Link>
            <Link href="/templates" prefetch={true} className="mobile_nav_items text-xl">
              <HiTemplate />
            </Link>
            <Link href="/plans" prefetch={true} className="mobile_nav_items text-xl">
              <BsFillDiagram3Fill />
            </Link>
            <Link href="/about" prefetch={true} className="mobile_nav_items text-xl">
              <RiInfoCardFill />
            </Link>
            <Link href="/contact" prefetch={true} className="mobile_nav_items text-xl">
              <MdConnectWithoutContact />
            </Link>
            <Link href="/profile" prefetch={true} className="mobile_nav_items text-xl">
              <ImProfile />
            </Link>
          </div>
      </div>


      {show && (
        <div
          onClick={scrollToTop}
          className="fixed left-2 bottom-10 text-3xl w-[40px] h-[40px] text-[#9C1F0E] rounded-full flex items-center justify-center cursor-pointer top_up"
        >
          <AiOutlineCaretUp />
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
