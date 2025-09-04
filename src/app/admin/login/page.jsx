"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AnimationWrapper from "@/components/AnimationWrapper";
import AnimatedText from "@/components/AnimatedText";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (isLoggedIn) {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "aplus" && password === "aplusadvertising") {
      localStorage.setItem("admin_logged_in", "true");
      router.push("/admin");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#CBD6EB] border">
      <AnimationWrapper direction="bottom">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96">
          <h1 className="text-xl sm:text-3xl md:text-5xl py-2 font-bold text-center mb-3">
            <AnimatedText text="Admin Login" from="left" />
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-1 border border-[#9C1F0E] text-[#9C1F0E] outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-1 border border-[#9C1F0E] text-[#9C1F0E] outline-none"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="border border-[#9C1F0E] text-[#9C1F0E] hover:text-black duration-300 font-semibold w-fit py-1 px-5 m-auto"
            >
              Login
            </button>
          </form>
        </div>
      </AnimationWrapper>
    </div>
  );
}
