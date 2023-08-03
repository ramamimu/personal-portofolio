import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { title, roles } from "@/types/appearText";

export default function FirstAppear() {
  const [isOpen, setIsOpen] = useState(true);
  const firstComp = useRef<HTMLDivElement>(null);
  const [heightCom, setHeightCom] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5200);
  }, [isOpen]);

  useEffect(() => {
    if (firstComp.current) {
      setHeightCom(firstComp.current.offsetHeight);
    }
  }, [firstComp]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.section
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          ref={firstComp}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: 2 }}
          exit={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          className="fixed left-0 top-0 flex h-screen w-full flex-row items-end justify-start bg-orange-500"
        >
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
                  <motion.p
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  >
                    {item}
                  </motion.p>{" "}
                </motion.div>
              );
            })}
            <div className="flex gap-2">
              {title.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateY: -50 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                    }}
                    transition={{ duration: 1, delay: 2.5 + index * 0.2 }}
                  >
                    <motion.p
                      animate={{
                        color: "rgb(15 23 42)",
                      }}
                      transition={{ duration: 1, delay: 3.5 + index * 0.2 }}
                    >
                      {item}
                    </motion.p>{" "}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
