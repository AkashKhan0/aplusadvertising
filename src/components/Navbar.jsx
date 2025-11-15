"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
import { MdConnectWithoutContact, MdWindow } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // outside click detect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-[#0A152F] backdrop-blur-[5px] shadow-md fixed bottom-0 left-0 w-full z-50 flex items-center justify-center h-[50px] universal">
      {/* ei navbar section desktop view er jonno */}
      <div className="w-full fixed_width desktop_view mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src="/logo.png"
            alt="My Business Logo"
            width={180}
            height={50}
            unoptimized
            className="w-[70px] h-[40px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav_ul hidden md:flex gap-4 text-lg font-semibold">
          <li>
            <div
              className={`li_hover ${isActive("/services") ? "active_li" : ""}`}
            ></div>
            <Link
              href="/services"
              prefetch={true}
              className={`nav_items ${
                isActive("/services") ? "active_li" : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <div
              className={`li_hover ${isActive("/blogs") ? "active_li" : ""}`}
            ></div>
            <Link
              href="/blogs"
              prefetch={true}
              className={`nav_items ${isActive("/blogs") ? "active_li" : ""}`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <div
              className={`li_hover ${isActive("/projects") ? "active_li" : ""}`}
            ></div>
            <Link
              href="/projects"
              prefetch={true}
              className={`nav_items ${
                isActive("/projects") ? "active_li" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <div
              className={`li_hover ${
                isActive("/templates") ? "active_li" : ""
              }`}
            ></div>
            <Link
              href="/templates"
              prefetch={true}
              className={`nav_items ${
                isActive("/templates") ? "active_li" : ""
              }`}
            >
              Templates
            </Link>
          </li>
          <li>
            <div
              className={`li_hover ${isActive("/plans") ? "active_li" : ""}`}
            ></div>
            <Link
              href="/plans"
              prefetch={true}
              className={`nav_items ${isActive("/plans") ? "active_li" : ""}`}
            >
              Your Plans
            </Link>
          </li>
          <li>
            <div
              className={`li_hover ${isActive("/about") ? "active_li" : ""}`}
            ></div>
            <Link
              href="/about"
              prefetch={true}
              className={`nav_items ${isActive("/about") ? "active_li" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <div
              className={`li_hover ${isActive("/contact") ? "active_li" : ""}`}
            ></div>
            <Link
              href="/contact"
              prefetch={true}
              className={`nav_items ${isActive("/contact") ? "active_li" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* ei section Mobile view er jonno */}
      <div className="w-full mobile_view">
        <div className="w-full flex items-center justify-center gap-4">
          <div className="w-full flex items-center justify-evenly gap-4">
            <Link
              href="/"
              prefetch={true}
              className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                isActive("/") ? "mobile_nav_items_active" : ""
              }`}
            >
              <TbHomeFilled />
            </Link>
            <Link
              href="/about"
              prefetch={true}
              className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                isActive("/about") ? "mobile_nav_items_active" : ""
              }`}
            >
              <RiInfoCardFill />
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                isActive("/contact") ? "mobile_nav_items_active" : ""
              }`}
            >
              <MdConnectWithoutContact />
            </Link>

            {/* Dropdown Menu */}
            <div ref={menuRef} className="relative mobile_nav_items">
              <div
                onClick={() => setOpen(!open)}
                className="more_icon_item text-lg sm:text-xl md:text-2xl"
              >
                <MdWindow />
              </div>

              <div
                className={`absolute bottom-[40px] right-0 flex flex-col gap-2 mobile_icon_menu px-0.5
            ${open ? "scale-y-100 duration-500" : "scale-y-0 duration-500"}`}
              >
                <Link
                  href="/services"
                  prefetch={true}
                  onClick={() => setOpen(false)} // ✅ close menu after click
                  className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                    isActive("/services") ? "mobile_nav_items_active" : ""
                  }`}
                >
                  <GrServices />
                </Link>

                <Link
                  href="/blogs"
                  prefetch={true}
                  onClick={() => setOpen(false)} // ✅
                  className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                    isActive("/blogs") ? "mobile_nav_items_active" : ""
                  }`}
                >
                  <LiaBlogSolid />
                </Link>

                <Link
                  href="/projects"
                  prefetch={true}
                  onClick={() => setOpen(false)} // ✅
                  className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                    isActive("/projects") ? "mobile_nav_items_active" : ""
                  }`}
                >
                  <FaDiagramProject />
                </Link>

                <Link
                  href="/templates"
                  prefetch={true}
                  onClick={() => setOpen(false)} // ✅
                  className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                    isActive("/templates") ? "mobile_nav_items_active" : ""
                  }`}
                >
                  <HiTemplate />
                </Link>

                <Link
                  href="/plans"
                  prefetch={true}
                  onClick={() => setOpen(false)} // ✅
                  className={`mobile_nav_items text-lg sm:text-xl md:text-2xl ${
                    isActive("/plans") ? "mobile_nav_items_active" : ""
                  }`}
                >
                  <BsFillDiagram3Fill />
                </Link>
              </div>
            </div>
          </div>
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
