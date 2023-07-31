"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import Layout from "@/components/mainLayout";
import FirstAppear from "@/components/firstAppear";
import ProfileText from "@/components/profileText";
import NextImage from "@/components/nextImage";
import RandomText from "@/components/randomText";

export default function Dashboard() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <ProfileText />
      <FirstAppear />
      <RandomText />
      <div className="flex h-screen w-full items-center justify-center bg-black p-10">
        <NextImage src="/neom.jpg" alt="ramamimu" width={1000} height={1000} />
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-black p-10">
        <NextImage src="/neom.jpg" alt="ramamimu" width={1000} height={1000} />
      </div>
    </Layout>
  );
}
