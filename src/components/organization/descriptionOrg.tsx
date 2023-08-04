import { useState } from "react";
import NextImage from "../tools/nextImage";
import { AnimatePresence, motion } from "framer-motion";
import { experiences, Experience } from "@/types/organizations";

export default function DescriptionOrg() {
  return (
    <section className="flex flex-wrap items-start justify-center gap-24 py-10 font-monserrat">
      <div className="flex flex-col gap-10">
        {experiences.map((item, index) => {
          return (
            index % 2 === 0 && (
              <CenterDescription
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
              <CenterDescription
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

function CenterDescription({
  name,
  duration,
  icon,
  link,
  positions,
  projects,
  jobDescription,
  about,
}: Experience) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <section
      className={`${
        isExpand ? "shadow-lg" : "shadow-2xl"
      } relative w-[500px] place-self-start rounded-md shadow-slate-500 transition-all duration-500 hover:shadow-lg hover:shadow-slate-500`}
    >
      <div className="absolute -right-8 top-12 inline-block rounded-full bg-slate-100 p-8">
        <NextImage src={icon} alt="" height={80} width={80} />
      </div>
      <div className="p-10">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
