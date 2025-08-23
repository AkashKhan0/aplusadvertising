import "../styles/globals.css";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="w-full h-fit flex items-center justify-center bg-[#232F3E] shadow-md footer">
            <div className="container flex flex-col items-center justify-center gap-3">
                <p className="text-center text-white">© 2024 Aplus Advertising Limited. All rights reserved.</p>
                <div className="w-full flex items-center justify-center gap-5">
                    <div className="social_icons"><FaFacebookSquare className="s_icon"/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer