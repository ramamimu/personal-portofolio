"use client";

import Layout from "@/components/mainLayout";
import FirstAppear from "@/components/firstAppear";
import ProfileText from "@/components/profileText";
import NextImage from "@/components/tools/nextImage";
import RandomText from "@/components/randomText";
import IntroductionePage from "@/components/introductionPage";
import Organization from "@/components/organization";
import OrganizationPage from "@/components/organizationPage";
import ProjectPage from "@/components/projectPage";

export default function Dashboard() {
  return (
    <Layout>
      <ProfileText />
      {/* <div className="flex h-screen w-full items-center justify-center bg-black p-10">
        <NextImage src="/neom.jpg" alt="ramamimu" width={1000} height={1000} />
      </div> */}
      <FirstAppear />
      {/* <RandomText /> */}
      <div className="flex min-h-screen w-full items-center justify-center bg-black py-24">
        <NextImage src="/neom.jpg" alt="ramamimu" width={1000} height={1000} />
      </div>
      <IntroductionePage />
      <Organization />
      <OrganizationPage />
      <ProjectPage />
      <div className="flex h-screen w-full items-center justify-center bg-black p-10">
        <NextImage src="/neom.jpg" alt="ramamimu" width={1000} height={1000} />
      </div>
    </Layout>
  );
}
