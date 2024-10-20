import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Section04 = () => {
  const containerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPolylineElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLengthMotionValue = useMotionValue(0);
  const dashOffset = useTransform(scrollYProgress, [0.3, 0.4], [pathLength, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      pathLengthMotionValue.set(length);
      console.log("Path length:", length);
    }
  }, [pathLengthMotionValue]);

  return (
    <section ref={containerRef} className="w-full h-[400vh] relative bg-blue-500">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-evenly">
        <div
          style={{ backgroundImage: `url(/logo.png)` }}
          className="w-[280px] h-[150px] flex justify-start items-center relative z-20"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 280 150"
            className="stroke-white fill-transparent stroke-[2px] stroke-miterlimit-10"
          >
            <motion.polyline
              ref={pathRef}
              points="125.96,123.28 94.3,123.28 145.23,148.39 196.17,123.28 164.51,123.28"
              style={{
                strokeDasharray: pathLengthMotionValue,
                strokeDashoffset: dashOffset,
              }}
            />
          </svg>
        </div>
        <div className="sticky bottom-0 w-full max-w-[400px] z-10 flex justify-center">
          <motion.img
            ref={imgRef}
            src="/ch.png"
            alt=""
            className="w-full h-full object-cover max-w-full"
            style={{ opacity: imgOpacity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section04;
