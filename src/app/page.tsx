"use client";

import Layout from "@/components/mainLayout";
import FirstAppear from "@/components/root/firstAppear";
import ProfileText from "@/components/root/profileText";
import NextImage from "@/components/tools/nextImage";
import IntroductionePage from "@/components/root/introductionPage";
import OrganizationPage from "@/components/root/organizationPage";
import ProjectPage from "@/components/root/projectPage";
import ContactPage from "@/components/root/contactPage";

export default function Dashboard() {
  return (
    <Layout>
      <ProfileText />
      {/* <FirstAppear /> */}
      <div className="flex min-h-screen w-full items-center justify-center bg-black py-24">
        <NextImage src="/neom.jpg" alt="ramamimu" width={1000} height={1000} />
      </div>
      <IntroductionePage />
      <OrganizationPage />
      <ProjectPage />
      <ContactPage />
    </Layout>
  );
}
