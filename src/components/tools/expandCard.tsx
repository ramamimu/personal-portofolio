import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ExpandCard({
  children1,
  children2,
}: {
  children1: JSX.Element;
  children2: JSX.Element;
}) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <section
      className={`${
        isExpand ? "shadow-lg" : "shadow-2xl"
      } relative w-[500px] place-self-start rounded-md shadow-slate-500 transition-all duration-500 hover:shadow-lg hover:shadow-slate-500`}
    >
      <div className="p-10">
        {children1}
        <div
          onClick={() => {
            setIsExpand(!isExpand);
          }}
          className="group relative flex h-10 items-center justify-between border-y border-slate-500 px-5 transition-all duration-300 hover:cursor-pointer hover:border-slate-300"
        >
          <p className="text-slate-400 transition-all duration-300 group-hover:cursor-pointer group-hover:text-slate-100">
            expand
          </p>
          <p
            className={`${
              isExpand ? "rotate-90" : "-rotate-90"
            } inline-block text-xl font-semibold text-slate-400 transition-all duration-500 group-hover:cursor-pointer group-hover:text-slate-100`}
          >
            {">"}
          </p>
        </div>
        <AnimatePresence mode="wait">
          {isExpand && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 50 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.5,
                when: "beforeChildren",
              }}
              className="overflow-hidden"
            >
              {children2}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
