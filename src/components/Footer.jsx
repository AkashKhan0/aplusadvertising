import Link from "next/link";
import "../styles/globals.css";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="w-full h-fit flex items-center justify-center bg-[#232f3e44] backdrop-blur-[5px] shadow-md footer">
            <div className="container flex flex-col items-center justify-center gap-3">
                <p className="text-center font-semibold">© 2024 Aplus Advertising Limited. All rights reserved.</p>
                <div className="w-full flex items-center justify-center gap-5">
                    <Link href="/" prefetch={true} className="social_icons"><FaFacebookSquare className="s_icon"/></Link>
                    <Link href="/" prefetch={true} className="social_icons"><FaInstagramSquare className="s_icon"/></Link>
                    <Link href="/" prefetch={true} className="social_icons"><FaLinkedin className="s_icon"/></Link>
                    <Link href="/" prefetch={true} className="social_icons"><FaYoutube className="s_icon"/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer