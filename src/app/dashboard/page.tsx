"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import Layout from "@/components/mainLayout";
import Link from "next/link";

export default function Dashboard() {
  const pathName = usePathname();

  return (
    <Layout>
      <AnimatePresence mode="sync">
        <motion.div
          key={pathName}
          initial={{
            opacity: 0,
            clipPath:
              "polygon(0 100%, 100% 98%, 100% 50%, 100% 100%, 50% 100%, 0 100%)",
          }}
          animate={{
            opacity: 1,
            clipPath:
              "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)",
          }}
          exit={{
            clipPath:
              "polygon(0 100%, 100% 98%, 100% 50%, 100% 100%, 50% 100%, 0 100%)",
          }}
          transition={{ duration: 1 }}
        >
          <Link href="/">click me</Link>
          {/* <motion.div
            className="h-96 w-96 rounded-3xl bg-blue-400 p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Dashboard
          </motion.div> */}
          hehe
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
