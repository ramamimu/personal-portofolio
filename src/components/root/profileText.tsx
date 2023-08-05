import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { title, roles } from "@/types/appearText";

export default function ProfileText() {
  return (
    <AnimatePresence mode="wait">
      <section className="absolute left-0 top-0 flex h-screen w-full flex-row items-end justify-start">
        <div className="m-10 flex flex-col gap-4 font-monserrat text-7xl font-extrabold text-slate-100">
          {roles.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: -50 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <motion.p transition={{ duration: 1, delay: 1 + index * 0.2 }}>
                  {item}
                </motion.p>{" "}
              </motion.div>
            );
          })}
          <div className="flex gap-2">
            {title.map((item, index) => {
              return (
                <div className="text-slate-500" key={index}>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
