"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Element1() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        rotation: 720,
        transformOrigin: "50% 50%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[150px] min-w-[150px]">
      <Image
        ref={imgRef}
        src="Elements/element2.svg" // ✅ Place your image in the public folder
        alt="Rotating Image"
        width={150}
        height={150}
        className="opacity-95"
      />
    </div>
  );
}
