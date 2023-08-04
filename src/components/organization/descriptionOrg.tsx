import NextImage from "../tools/nextImage";
import { motion } from "framer-motion";
import { experiences, Experience } from "@/types/organizations";
import ExpandCard from "@/components/tools/expandCard";
import Link from "next/link";

export default function DescriptionOrg() {
  return (
    <section className="flex flex-wrap items-start justify-center gap-24 py-10 font-monserrat">
      <div className="flex flex-col gap-10">
        {experiences.map((item, index) => {
          return (
            index % 2 === 0 && (
              <Description
                key={item.name}
                name={item.name}
                duration={item.duration}
                icon={item.icon}
                link={item.link}
                positions={item.positions}
                projects={item.projects}
                jobDescription={item.jobDescription}
                about={item.about}
              />
            )
          );
        })}
      </div>
      <div className="flex flex-col gap-10">
        {experiences.map((item, index) => {
          return (
            index % 2 === 1 && (
              <Description
                key={item.name}
                name={item.name}
                duration={item.duration}
                icon={item.icon}
                link={item.link}
                positions={item.positions}
                projects={item.projects}
                jobDescription={item.jobDescription}
                about={item.about}
              />
            )
          );
        })}
      </div>
    </section>
  );
}

function Description({
  name,
  duration,
  icon,
  link,
  positions,
  projects,
  jobDescription,
  about,
}: Experience) {
  return (
    <ExpandCard
      children1={
        <TopDescription
          name={name}
          duration={duration}
          icon={icon}
          positions={positions}
          projects={projects}
          link={link}
        />
      }
      children2={
        <BottomDescription
          about={about}
          jobDescription={jobDescription}
          name={name}
        />
      }
    />
  );
}

type TopDescriptionProps = {
  name: string;
  duration: string;
  icon: string;
  positions: string[];
  projects: string[];
  link: string;
};

function TopDescription({
  name,
  duration,
  icon,
  positions,
  projects,
  link,
}: TopDescriptionProps) {
  return (
    <>
      <Link href={link} target="_blank">
        <div className="absolute -right-8 top-12 inline-block rounded-full bg-slate-100 p-8">
          <NextImage src={icon} alt="" height={80} width={80} />
        </div>
      </Link>
      <div className="py-5">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p>{duration}</p>
        <div className="py-5 pt-2">
          {positions.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Projects</h3>
          {projects.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </>
  );
}

function BottomDescription({
  jobDescription,
  about,
  name,
}: {
  jobDescription: string;
  about: string;
  name: string;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="py-10 pt-5"
      >
        <h3 className="pt-5 text-2xl font-semibold">Job Description</h3>
        <p>{jobDescription}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <h3 className="text-2xl font-semibold">About {name}</h3>
        <p>{about} </p>
      </motion.div>
    </>
  );
}
