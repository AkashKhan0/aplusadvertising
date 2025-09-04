import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimationWrapper from "./AnimationWrapper";

export default function Service() {
  return (
    <>
      <div className="w-full universal">
        <div className="fixed_width py-5 px-2 sm:px-2 md:px-2">
          {/* services heading */}
          <div className="w-full ">
            <AnimationWrapper direction="left">
              <div className="w-fit flex items-center justify-center gap-3">
                <Image
                  src="/images/service.png"
                  alt="aplus"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] mt-[-5px]"
                />
                <h1 className="text-lg sm:text-xl md:text-xl font-bold uppercase">
                  <AnimatedText text="Our Services" from="left" />
                </h1>
              </div>
            </AnimationWrapper>

            <AnimationWrapper direction="right">
              <div className="w-fit">
                <h1 className="text-2xl sm:text-3xl md:text-5xl title1 font-bold">
                  <AnimatedText
                    text="Where quality meets amazing service!"
                    from="right"
                  />
                </h1>
              </div>
            </AnimationWrapper>
          </div>

          {/* services content */}
          <div className="mt-2 border p-5"></div>
        </div>
      </div>
    </>
  );
}
