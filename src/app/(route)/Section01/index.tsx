import React, { useRef, useState } from "react";
import { useGsapScrollTrigger } from "../../../hook/useGsapScrollTrigger";
import Image from "next/image";

const Section01 = () => {
  const triggerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(1);

  const totalImages = 6;

  useGsapScrollTrigger(
    triggerRef,
    "to",
    {},
    {
      trigger: triggerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newImageNumber = Math.floor(progress * (totalImages - 1)) + 1;
        if (newImageNumber !== currentImage) {
          setCurrentImage(newImageNumber);
        }
      },
    }
  );

  return (
    <section
      ref={triggerRef}
      className="w-full h-[300vh] relative bg-black text-white border-4 border-red-600"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* <img
          src={`mockup_0${currentImage}.png`}
          alt={`Mockup ${currentImage}`}
          className="max-w-full max-h-full"
        /> */}
        <Image
          src={`/mockup_0${currentImage}.png`}
          alt={`Mockup ${currentImage}`}
          width={500}
          height={500}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Section01;
