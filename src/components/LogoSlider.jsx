"use client";
import { useEffect, useState } from "react";
import "../styles/logoslider.css";
import AnimationWrapper from "./AnimationWrapper";
import AnimatedText from "./AnimatedText";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";

export default function LogoSlider() {
  const [animate, setAnimate] = useState(false);

  // সব sub-category এক array তে
  const services = [
    // Web Development
    "Website Creation",
    "Redesign",
    "Custom Website",
    "Bug Fixing",
    "CMS Website (WordPress)",
    "UI/UX Design",
    "E-commerce Website",
    "Landing Pages",
    "Website Maintenance & Support",
    "Web App Development",

    // SEO
    "On page SEO",
    "Off page SEO",
    "Product SEO",
    "Technical SEO",
    "Local SEO",
    "SEO Audits",

    // Digital Marketing
    "Social Media Marketing",
    "Affiliate Marketing",
    "Google Ads (Search/Display)",
    "PPC Campaign Management",
    "Email Marketing",
    "Content Marketing",
    "Brand Ambassadors",
    "Conversion Rate Optimization (CRO)",
    "Landing Page Optimization",
    "Online Reputation Management (ORM)",
    "Review Management",
    "Brand Monitoring",
    "Google Analytics",
    "Campaign Performance Reports",
  ];

  const logos = [
    { src: "/images/css.png", alt: "CSS" },
    { src: "/images/js.png", alt: "JavaScript" },
    { src: "/images/React.png", alt: "ReactJS" },
    { src: "/images/html.png", alt: "HTML" },
    { src: "/images/angular.png", alt: "Angular" },
    { src: "/images/figma.png", alt: "Figma" },
    { src: "/images/mongodb.png", alt: "Mongodb" },
    { src: "/images/photoshop.png", alt: "Photoshop" },
    { src: "/images/express.png", alt: "Express" },
    { src: "/images/node.png", alt: "Node" },
    { src: "/images/wordpress.png", alt: "Wordpress" },
    { src: "/images/mui.png", alt: "MUI" },
    { src: "/images/tailwind.png", alt: "Tailwind" },
    { src: "/images/premierePro.png", alt: "Premiere Pro" },
    { src: "/images/next.png", alt: "Next Js" },
  ];

  const renderServices = () =>
    services.map((service, idx) => <span key={idx}>{service}</span>);

  const renderLogos = () =>
    logos.map((logo, idx) => <img key={idx} src={logo.src} alt={logo.alt} />);

  const { ref, inView } = useInView({
    triggerOnce: true, // শুধু একবার animate হবে
    threshold: 0.3, // 30% visible হলে trigger হবে
  });

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
    <div className="w-full universal py-20 bg-[#F1E3A4]">
      <div className="fixed_width">
        <div className="">
          {/* Text Scroll Section */}
          <div className="scroll" style={{ "--time": "200s" }}>
            <div>{renderServices()}</div>
            <div>{renderServices()}</div>
          </div>

          {/* Logo Scroll Section (same রাখতে চাইলে images array ব্যবহার করতে পারো) */}
          <div className="scroll imgBox mt-10" style={{ "--time": "20s" }}>
            <div>{renderLogos()}</div>
            <div>{renderLogos()}</div>
          </div>
        </div>
      </div>
    </div>


  <div className="w-full universal py-10 bg-[#FAF9D0]">
      <div className="fixed_width">
        {/* our achivment */}
        <div className="w-full mb-10">
          <div className="w-full flex flex-col items-center justify-center">
            <AnimationWrapper direction="left">
              <h1 className="text-4xl sm:text-3xl title1 md:text-4xl font-bold my-5">
                <AnimatedText text="Our Achievement" from="right" />
              </h1>
            </AnimationWrapper>

            {/* progress bar */}
            <div className="w-full flex flex-col sm:flex-col md:flex-row items-center justify-evenly gap-5">
              {/* complete project */}
              <AnimationWrapper direction="left">
                <div
                  ref={ref}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/complete.gif"
                    alt="Complete project"
                    className="w-[100px] rounded-full"
                  />
                  <h1 className="text-xl md:text-2xl title1 font-bold">
                    <AnimatedText text="Completed Project" from="right" />
                  </h1>
                  {inView && (
                    <div className="text-xl md:text-5xl font-extrabold">
                      <CountUp start={1} end={113} duration={3} />+
                    </div>
                  )}
                </div>
              </AnimationWrapper>

              {/* happy client */}
              <AnimationWrapper direction="top">
                <div
                  ref={ref}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/happy.gif"
                    alt="Happy client"
                    className="w-[100px] rounded-full"
                  />
                  <h1 className="text-xl md:text-2xl title1 font-bold">
                    <AnimatedText text="Happy Clients" from="right" />
                  </h1>
                  {inView && (
                    <div className="text-xl md:text-5xl font-extrabold">
                      <CountUp start={1} end={94} duration={3} />%
                    </div>
                  )}
                </div>
              </AnimationWrapper>

              {/* clients review */}
              <AnimationWrapper direction="right">
                <div
                  ref={ref}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="/images/review.gif"
                    alt="Clients Review"
                    className="w-[100px] rounded-full"
                  />
                  <h1 className="text-xl md:text-2xl title1 font-bold">
                    <AnimatedText text="Client Feedback" from="right" />
                  </h1>
                  {inView && (
                    <div className="flex space-x-2 text-xl md:text-5xl">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`transition-colors duration-1000 ${
                            animate ? `star star-${i}` : "text-white"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </AnimationWrapper>
            </div>
          </div>

      </div>
    </div>
    </div>
    </>
  );
}
