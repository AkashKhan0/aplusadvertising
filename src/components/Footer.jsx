"use client";
import Link from "next/link";
import "../styles/globals.css";
import { usePathname } from "next/navigation";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <div>
      <div className="w-full h-fit flex items-center justify-center bg-[#0A152F] backdrop-blur-[5px] shadow-md footer text-[#fff]">
        <div className="container flex flex-col items-center justify-center gap-1">
          
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-evenly gap-2 w-full ">
            <div className="w-fit flex items-center justify-center gap-5">
            <Link href="/" prefetch={true} className="social_icons">
              <FaFacebookSquare className="s_icon" />
            </Link>
            <Link href="/" prefetch={true} className="social_icons">
              <FaInstagramSquare className="s_icon" />
            </Link>
            <Link href="/" prefetch={true} className="social_icons">
              <FaLinkedin className="s_icon" />
            </Link>
            <Link href="/" prefetch={true} className="social_icons">
              <FaYoutube className="s_icon" />
            </Link>
          </div>
          
          <p className="text-center font-semibold">
            © 2024 A Plus Advertising Limited. All rights reserved.
          </p>
          <div className="w-fit flex flex-col sm:flex-col md:flex-row items-center justify-center gap-1 md:gap-5">
            <Link
              href="/privacy-policy"
              prefetch={true}
              className={`hover:text-[#9c1f0e] duration-300 text-sm ${isActive("/privecy-policy") ? "text-[#9c1f0e]" : ""}`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              prefetch={true}
              className={`hover:text-[#9c1f0e] duration-300 text-sm ${isActive("/terms-conditions") ? "text-[#9c1f0e]" : ""}`}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refund-policy"
              prefetch={true}
              className={`hover:text-[#9c1f0e] duration-300 text-sm ${isActive("/refund-policy") ? "text-[#9c1f0e]" : ""}`}
            >
              Refund Policy
            </Link>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
