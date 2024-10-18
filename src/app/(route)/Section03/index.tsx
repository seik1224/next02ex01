import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section03 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  //   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full items-center" style={{ x }}>
          <div className="h-[100vh] w-[400vw] flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-start px-20">
              <h2 className="text-white text-2xl md:text-6xl font-bold">
                긴 섹션 내용이 여기에 들어갑니다. 스크롤하여 더 많은 내용을
                확인하세요.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section03;
