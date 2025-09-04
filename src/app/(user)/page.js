import Hero from "@/components/Hero";
import Service from "@/components/Service";
import "../../styles/globals.css";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col mb-[60px]">
        <Hero />
        <Service />
      </div>
    </>
  );
}
