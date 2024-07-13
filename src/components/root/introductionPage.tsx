"use client";
import { useEffect, useRef } from "react";

import { introText } from "@/types/appearText";

import { motion, useScroll, scroll, animate, useInView } from "framer-motion";

export default function IntroductionePage() {
  const introRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(introRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["0 1", "0.5 0.5"],
  });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  // scrollYProgress.on("change", () => {
  //   console.log(scrollYProgress.get());
  // animate(introRef.current, {
  //   backgroundColor: ["rgb(0, 0, 0)", "rgb(241, 245, 249)"],
  //   transition: {
  //     duration: 1,
  //   },
  // });
  // });

  // animate the background color

  // scroll(introRef.current, {
  //   backgroundColor: ["rgb(0, 0, 0)", "rgb(241, 245, 249)"],
  // });

  // scrollYProgress.onChange((latest) => {
  //   if (latest > 0.5) {
  //     animate(introRef.current, {
  //       opacity: 0,
  //       transition: {
  //         duration: 1,
  //       },
  //     });
  //   }
  // });

  return (
    <motion.section
      ref={introRef}
      id="intro"
      className="flex flex-col items-center justify-center gap-8 bg-slate-100 px-5 py-20"
    >
      {isInView &&
        introText.map((item, index) => (
          <motion.p
            initial={{ opacity: 0, translateY: -50 }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{ duration: 1, delay: index * 1.2 }}
            key={item}
            className="text-center text-xl font-bold text-slate-700 md:text-6xl"
          >
            {item}
          </motion.p>
        ))}
    </motion.section>
  );
}
