"use client";
import { useEffect, useState } from "react";

import AnimatedText from "@/components/AnimatedText";
import AnimationWrapper from "@/components/AnimationWrapper";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

export default function About() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/partners");
      const data = await res.json();
      setPartners(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <>
      {/* who we are start */}
      <div className="universal py-10 bg-[#FAF9D0]">
        <div className="fixed_width px-5">
          <div className="w-full flex flex-col sm:flex-col md:flex-row items-stretch justify-center gap-2.5 pt-10">
            {/* left side */}
            <div className="w-full sm:w-full md:w-[40%] flex items-center justify-center p-5">
              <Image
                src="/images/who-we-are.png"
                alt="phone icon"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* right side */}
            <div className="w-full sm:w-full md:w-[60%]">
              <AnimationWrapper direction="left">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-center sm:text-center md:text-start">
                  <AnimatedText text="WHO WE ARE" from="right" />
                </h1>
              </AnimationWrapper>
              <div className="w-full flex flex-col gap-5">
                <p className="text-lg text-justify">
                  A Plus Advertising Limited is a leading web development and
                  digital marketing company in Bangladesh, dedicated to helping
                  businesses grow through technology, creativity, and strategy.
                  Founded with a mission to deliver high-quality, data-driven
                  solutions, we have quickly become recognized as one of the
                  best web development companies in Dhaka and across Bangladesh.
                </p>
                <p className="text-lg text-justify">
                  We specialize in website design and development, SEO
                  optimization, digital marketing, social media management,
                  branding, and online advertising. Our team of experienced
                  professionals focuses on creating powerful online presences
                  that attract traffic, generate leads, and convert visitors
                  into loyal customers.
                </p>
                <p className="text-lg text-justify">
                  At A Plus Advertising Limited, we believe that a great website
                  is more than just design; it’s a tool for growth. That’s why
                  every project we handle is built with performance, user
                  experience, and SEO in mind. We work closely with our clients
                  to understand their goals, create custom digital strategies,
                  and ensure their brands stand out in the competitive online
                  world.
                </p>
              </div>
            </div>
          </div>
          {/* botom part */}
          <div className="w-full py-2 mb-10">
            <p className="text-lg text-justify mb-3">
              We take pride in being a trusted partner for startups, small
              businesses, and corporate clients, both locally and
              internationally. Our continuous commitment to innovation,
              transparency, and customer satisfaction sets us apart in the
              digital industry.
            </p>
            <p className="text-xl font-bold">Leadership Team</p>
            <ul className="pl-5" style={{ listStyleType: "square" }}>
              <li>
                {" "}
                <strong>Chairman: </strong> Md. Selim Khan
              </li>
              <li>
                {" "}
                <strong>Chief Executive Officer (CEO): </strong> Rubayet Nazim
                Shoud
              </li>
              <li>
                {" "}
                <strong>Chief Technology Officer (CTO): </strong> Fahad Nur
                Akash
              </li>
            </ul>
            <p className="my-2 text-lg text-justify">
              {" "}
              <strong>A Plus Advertising Limited, </strong> empowering
              businesses to succeed online with cutting-edge technology and
              creative strategy.
            </p>
          </div>
        </div>
      </div>
      {/* who we are end here */}

      {/* why choose us start */}
      <div className="universal py-20 bg-[#F1E3A4]">
        <div className="fixed_width px-5">
          <div className="w-full flex flex-col-reverse sm:flex-col-reverse md:flex-row items-stretch justify-center gap-2.5">
            {/* left side */}
            <div className="w-full sm:w-full md:w-[60%]">
              <AnimationWrapper direction="left">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-center sm:text-center md:text-start">
                  <AnimatedText text="WHY CHOOSE US" from="right" />
                </h1>
              </AnimationWrapper>
              <p className="text-lg text-justify">
                Choosing the right digital partner can define the success of
                your business, and A Plus Advertising Limited stands out as the
                Best Web Development Company in Bangladesh for several strong
                reasons.
              </p>

              <h1 className="text-xl font-semibold mt-2">
                1. All-in-One Digital Solution
              </h1>
              <p className="text-lg text-justify">
                From website development and SEO optimization to social media
                marketing, Google Ads, and branding, we provide a complete 360°
                digital service under one roof. You don’t need multiple agencies
                when one team can handle it all efficiently.
              </p>

              <h1 className="text-xl font-semibold mt-2">
                2. Fast Delivery & Affordable Pricing
              </h1>
              <p className="text-lg text-justify">
                We understand that time and budget matter. That’s why our expert
                developers and marketers deliver top-quality projects on time
                and within budget, without compromising quality.
              </p>

              <h1 className="text-xl font-semibold mt-2">
                3. Custom Strategies for Every Business
              </h1>
              <p className="text-lg text-justify">
                Every business is unique, and so are our strategies. We craft
                custom digital solutions tailored to your industry, target
                audience, and long-term goals, ensuring measurable growth and
                brand visibility.
              </p>
            </div>

            {/* right side */}
            <div className="w-full sm:w-full md:w-[40%] flex items-center justify-center p-5">
              <Image
                src="/images/why-choose-us.png"
                alt="phone icon"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* botom part */}
          <div className="w-full py-2">
            <h1 className="text-xl font-semibold mt-2">
              4. After-Project 30 Days Free Support
            </h1>
            <p className="text-lg text-justify">
              Our relationship doesn’t end when your project is delivered. We
              provide 30 days of free post-launch support to ensure everything
              runs perfectly and you get the best results from your digital
              investment.
            </p>

            <h1 className="text-xl font-semibold mt-2">
              5. Trusted & Experienced Team
            </h1>
            <p className="text-lg text-justify">
              At A Plus Advertising Limited, our strength lies in our highly
              skilled and dedicated development team. With over 5 years of
              experience in web development, SEO, and digital marketing, our
              professionals bring a wealth of knowledge and expertise to every
              project. Our team has successfully delivered numerous projects for
              clients across Dhaka, Bangladesh, and internationally, ensuring
              that every website, SEO strategy, and digital campaign meets the
              highest standards of quality and performance.
            </p>
            <p className="text-lg text-justify my-2">
              With a combination of expertise, creativity, and industry
              knowledge, A Plus Advertising Limited stands out as the best web
              development company in Dhaka and Bangladesh
            </p>
          </div>
          {/* why choose us end here */}
        </div>
      </div>
      {/* why choose us end here */}

      {/* partner section start */}
      <div className="universal pt-20 bg-[#FAF9D0]">
        <div className="fixed_width px-5">
          <AnimationWrapper direction="left">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center title1 mb-10">
              <AnimatedText text="Our Team Members" from="right" />
            </h1>
          </AnimationWrapper>

          {/* partner details */}
          <div className="space-y-4">
            {loading && <p className="text-center text-gray-500">Loading...</p>}

            {!loading && partners.length === 0 && (
              <p className="text-center text-gray-500">No partners found</p>
            )}

            <div className="w-full pb-20 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {!loading &&
                partners.map((p) => (
                  <div
                    key={p._id}
                    className="overflow-hidden h-fit duration-300 rounded text-center bg-[#000000be] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex flex-col items-center gap-3 rounded">
                      {/* cover photo */}
                      <div className="w-full h-[150px] top-0 left-0">
                        <img
                          src={p.profilePicture}
                          alt={p.name}
                          className="inset-0 w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex w-full items-center gap-3 py-1 px-2 relative">
                        <div className="w-[100px] h-[100px] rounded-full mt-[-50px]">
                          <img
                            src={p.profilePicture}
                            alt={p.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="text-start">
                          <h1 className="text-xl text-[#fff] font-semibold capitalize leading-[20px]">
                            {p.name}
                          </h1>
                          <p className="text-base font-medium text-[#fff] capitalize">
                            {p.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#fff] text-lg line-clamp-2 my-5">
                      {p.description || "No description available."}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* partner section end here */}

      {/*OUR MISSION start */}
      <div className="universal py-10 bg-[#F1E3A4]">
        <div className="fixed_width px-5">
          <div className="w-full flex flex-col sm:flex-col md:flex-row items-stretch justify-center gap-2.5 pt-10">
            {/* left side */}
            <div className="w-full sm:w-full md:w-[40%] flex items-center justify-center p-5">
              <Image
                src="/images/Our-Mission.png"
                alt="phone icon"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* right side */}
            <div className="w-full sm:w-full md:w-[60%]">
              <AnimationWrapper direction="left">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-center sm:text-center md:text-start">
                  <AnimatedText text="OUR MISSION" from="right" />
                </h1>
              </AnimationWrapper>
              <div className="w-full flex flex-col gap-5">
                <p className="text-lg text-justify">
                  At A Plus Advertising Limited, our mission is to empower businesses with innovative digital solutions that drive growth, enhance visibility, and deliver measurable success. We aim to become the best web development company in Bangladesh by combining technology, creativity, and strategic marketing expertise to help brands thrive in the digital era.
                </p>
                <p className="text-lg text-justify">
                  We believe that every business, whether a startup or a global enterprise, deserves a strong digital foundation. That’s why our mission focuses on delivering custom-built websites, high-performing SEO campaigns, and result-driven digital marketing strategies that transform ideas into impactful online experiences.
                </p>
                <p className="text-lg text-justify">
                  Our team is committed to excellence, transparency, and long-term partnership. We don’t just build websites or run ads; we build digital ecosystems designed for sustainable success. With our 30-day free after-project support, we ensure every client gets continuous value even after the project is delivered.
                </p>
              </div>
            </div>
          </div>
          {/* botom part */}
          <div className="w-full py-2 mb-10">
            <p className="text-lg text-justify mb-3">
              Our mission is simple: to help your business grow faster, reach wider, and achieve lasting digital success, with performance, trust, and innovation at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
      {/* OUR MISSION end here */}


      {/* our vision start */}
      <div className="universal py-20 bg-[#FAF9D0]">
        <div className="fixed_width px-5">
          <div className="w-full flex flex-col-reverse sm:flex-col-reverse md:flex-row items-stretch justify-center gap-2.5">
            {/* left side */}
            <div className="w-full sm:w-full md:w-[60%]">
              <AnimationWrapper direction="left">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold text-center sm:text-center md:text-start">
                  <AnimatedText text="OUR VISION" from="right" />
                </h1>
              </AnimationWrapper>
              <p className="text-lg text-justify">
                At A Plus Advertising Limited, our vision is to be the leading digital solutions provider in Bangladesh, recognized as the best web development company in Dhaka and a trusted partner for businesses worldwide.
              </p>

              <p className="text-lg text-justify my-2">
               We envision a future where every business, regardless of size, can leverage cutting-edge technology, creative design, and strategic digital marketing to grow and thrive online. Our goal is to empower brands with innovative websites, high-performing SEO strategies, and result-driven digital campaigns that deliver measurable success.
              </p>

              <p className="text-lg text-justify">
                We strive to set new standards in the digital industry by combining technical expertise, industry knowledge, and a commitment to client satisfaction. Through continuous learning, innovation, and a customer-first approach, we aim to transform how businesses engage with their audience online.
              </p>

              <p className="text-lg text-justify my-2">
                Our vision is clear: To create a digital landscape where A Plus Advertising Limited is synonymous with quality, reliability, and success in web development and digital marketing, locally in Bangladesh and globally.
              </p>
            </div>

            {/* right side */}
            <div className="w-full sm:w-full md:w-[40%] flex items-center justify-center p-5">
              <Image
                src="/images/our-vision.png"
                alt="phone icon"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* why choose us end here */}
        </div>
      </div>
      {/* our vision end here */}
    </>
  );
}
