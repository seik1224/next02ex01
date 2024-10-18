import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section02 = () => {
  //   const containerRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start end", "end start"],
  //   });

  //   const text = "텍스트 예제텍스트 예제텍스트 예제텍스트 예제";
  //   const characters = text.split("");

  //   const opacities = characters.map((_, index) =>
  //     useTransform(
  //       scrollYProgress,
  //       [
  //         0.1 + (index / characters.length) * 0.1,
  //         0.1 + ((index + 1) / characters.length) * 0.1,
  //       ],
  //       [0, 1]
  //     )
  //   );

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  //   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const x = useTransform(scrollYProgress, [0.5, 1], ["0vw", "-300vw"]);
  const circleRadius = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <>
      {/* <div
        ref={containerRef}
        className="w-full h-[500vh] relative bg-black text-white border-4 border-blue-600"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <p>
            {characters.map((char, index) => (
              <motion.span
                key={index}
                style={{
                  opacity: opacities[index],
                }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </div>
      </div> */}

      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="flex h-full items-center" style={{ x }}>
            <div className="h-[100vh] w-[400vw] flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-start px-20 relative">
                <h2 className="pl-[100vw] text-white text-2xl md:text-6xl font-bold relative z-10">
                  긴 섹션 내용이 여기에 들어갑니다. 스크롤하여 더 많은 내용을
                  확인하세요.
                </h2>
              </div>
            </div>
          </motion.div>
          <div className="absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="circleMask">
                  <rect width="100%" height="100%" fill="white" />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    fill="black"
                    r={circleRadius}
                  />
                </mask>
              </defs>
              <rect
                width="100%"
                height="100%"
                className="fill-green-900"
                mask="url(#circleMask)"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section02;
