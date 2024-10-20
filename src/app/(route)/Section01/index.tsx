import React, { useRef, useState } from "react";
import { useGsapScrollTrigger } from "../../../hook/useGsapScrollTrigger";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Section01 = () => {
  const triggerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 11;

  useGsapScrollTrigger(
    triggerRef,
    "to",
    {},
    {
      trigger: triggerRef.current,
      start: "top top",
      end: "50% bottom",
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newImageNumber = Math.floor(progress * (totalImages - 1)) + 1;
        if (newImageNumber !== currentImage) {
          setCurrentImage(newImageNumber);
        }
      },
    }
  );

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0.3, 0.35], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.4], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.45], ["100%", "0%"]);
  const y4 = useTransform(scrollYProgress, [0.45, 0.5], ["100%", "0%"]);

  return (
    <section ref={triggerRef} className="w-full h-[400vh] relative bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          style={{ backgroundImage: `url(/digivice.jpg)` }}
          className="w-[400px] h-[400px] flex justify-center items-center"
        >
          {/* <img
          src={`mockup_0${currentImage}.png`}
          alt={`Mockup ${currentImage}`}
          className="max-w-full max-h-full"
        /> */}
          <Image
            src={`/001/egg${currentImage.toString().padStart(2, "0")}.png`}
            alt={`egg ${currentImage}`}
            width={124}
            height={124}
            className="max-w-full max-h-full object-contain -mt-1 rounded-[10px] border border-[#2a323c]"
          />
        </div>
      </div>
      <div className="sticky top-0 left-0 w-full h-full overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute left-0 w-1/4 h-full bg-white"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute left-1/4 w-1/4 h-full bg-white"></motion.div>
        <motion.div style={{ y: y3 }} className="absolute left-2/4 w-1/4 h-full bg-white"></motion.div>
        <motion.div style={{ y: y4 }} className="absolute left-3/4 w-1/4 h-full bg-white"></motion.div>
      </div>
    </section>
  );
};

export default Section01;
