"use client";
import AdminAuth from "@/components/AdminAuth";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AnimatedText from "@/components/AnimatedText";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    router.push("/admin/login");
  };

  return (
    <>
      <AdminAuth>
        <div className="w-full universal bg-[#9EAABD] py-1">
          <div className="fixed_width text-black flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl md:text-3xl title1 font-bold text-center">
              <AnimatedText text="Admin Login" from="left" />
            </h1>
            <button
              onClick={handleLogout}
              className="text-xl sm:text-2xl md:text-3xl hover:text-red-600 duration-300"
            >
              <IoLogOutOutline />
            </button>
          </div>
        </div>
      </AdminAuth>

      {/* admin dashboard */}
      <AdminDashboard />
    </>
  );
}
