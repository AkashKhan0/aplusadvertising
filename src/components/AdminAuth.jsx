"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminAuth({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [router]);

  return <>{children}</>;
}
