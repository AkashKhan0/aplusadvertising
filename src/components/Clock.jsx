"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Current time
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  // Angles for dots
  const secAngle = (seconds / 60) * 360;
  const minAngle = (minutes / 60) * 360;
  const hrAngle = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <div className="flex gap-3">
        {/* Hour */}
        <div className="relative w-16 h-16 rounded-full border border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.6)] flex items-center justify-center backdrop-blur-md bg-white/10">
          <div
            className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_cyan]"
            style={{
              transform: `rotate(${hrAngle}deg) translateY(-28px)`,
              transition: "transform 0.5s linear",
            }}
          ></div>
          <span className="text-lg font-bold">{hours.toString().padStart(2, "0")}</span>
        </div>

        {/* Minute */}
        <div className="relative w-16 h-16 rounded-full border border-pink-400 shadow-[0_0_20px_rgba(255,0,150,0.6)] flex items-center justify-center backdrop-blur-md bg-white/10">
          <div
            className="absolute w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_15px_pink]"
            style={{
              transform: `rotate(${minAngle}deg) translateY(-28px)`,
              transition: "transform 0.5s linear",
            }}
          ></div>
          <span className="text-lg font-bold">{minutes.toString().padStart(2, "0")}</span>
        </div>

        {/* Second */}
        <div className="relative w-16 h-16 rounded-full border border-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.6)] flex items-center justify-center backdrop-blur-md bg-white/10">
          <div
            className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_15px_yellow]"
            style={{
              transform: `rotate(${secAngle}deg) translateY(-28px)`,
              transition: "transform 0.2s linear",
            }}
          ></div>
          <span className="text-lg font-bold">{seconds.toString().padStart(2, "0")}</span>
        </div>

        {/* AM / PM */}
        <div className="relative w-16 h-16 rounded-full border border-green-400 shadow-[0_0_20px_rgba(0,255,100,0.6)] flex items-center justify-center backdrop-blur-md bg-white/10">
          <span className="text-lg font-bold">{ampm}</span>
        </div>
      </div>
    </div>
  );
}
