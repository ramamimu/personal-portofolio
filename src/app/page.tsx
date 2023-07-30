"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import Layout from "@/components/mainLayout";
import FirstAppear from "@/components/firstAppear";

export default function Dashboard() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <FirstAppear />
      <div className="bg-orange-400 p-10">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="h-96 w-96 rounded-3xl bg-blue-400 p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              Dashboard
            </motion.div>
          )}{" "}
        </AnimatePresence>
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          play the box
        </p>
      </div>
    </Layout>
  );
}
