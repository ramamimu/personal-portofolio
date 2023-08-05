import ExpandCard from "@/components/tools/expandCard";
import Link from "next/link";
import NextImage from "./tools/nextImage";

import { BottomComponent, TopComponent, projects } from "@/types/projects";

export default function ProjectPage() {
  return (
    <section className="min-h-screen bg-yellow-300 py-10 text-slate-50 ">
      <h2 className="py-10 text-center text-4xl font-semibold text-slate-800">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-16">
        <div className="flex flex-col gap-10">
          {projects.map((item, index) => {
            return (
              index % 2 === 0 && (
                <ExpandCard
                  key={item.title}
                  children1={
                    <TopDescription
                      company={item.company}
                      description={item.description}
                      title={item.title}
                      tools={item.tools}
                    />
                  }
                  children2={
                    <BottomDescription
                      about={item.about}
                      documentations={item.documentations}
                      tools={item.tools}
                    />
                  }
                  addedClass="bg-slate-900"
                />
              )
            );
          })}
        </div>
        <div className="flex flex-col gap-10">
          {projects.map((item, index) => {
            return (
              index % 2 === 1 && (
                <ExpandCard
                  key={item.title}
                  children1={
                    <TopDescription
                      company={item.company}
                      description={item.description}
                      title={item.title}
                      tools={item.tools}
                    />
                  }
                  children2={
                    <BottomDescription
                      about={item.about}
                      documentations={item.documentations}
                      tools={item.tools}
                    />
                  }
                  addedClass="bg-slate-900"
                />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TopDescription({ title, company, tools, description }: TopComponent) {
  return (
    <section>
      <div className="my-5">
        <h2 className="my-2 text-3xl font-semibold">{title}</h2>
        <div className="flex items-center gap-3">
          <div className="inline-block rounded-full bg-slate-300 p-2">
            <NextImage src={company.logo} height={15} width={15} alt="" />
          </div>
          <div>associated with {company.associated}</div>
        </div>
      </div>

      <div className="my-5">
        <p>{description}</p>
      </div>
      <div className="my-5 pb-2">
        <h3 className="pb-1 text-2xl font-semibold">Tools</h3>
        <p className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="cursor-default rounded-md border border-slate-700 px-2 py-1 text-xs"
            >
              {tool}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function BottomDescription({ about, documentations, tools }: BottomComponent) {
  return (
    <section>
      <div className="my-5">
        <h3 className="mb-2 mt-5 text-2xl font-semibold">Documentations</h3>
        <div className="flex flex-wrap gap-2">
          {documentations.links.map((link) => {
            return (
              <Link href={link.link} key={link.name}>
                <div className="rounded-md bg-slate-500 px-3 py-1 text-sm transition-all duration-300 hover:bg-slate-600">
                  {link.name}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="my-5">
          <div className="inline-block overflow-hidden rounded-2xl">
            <NextImage
              src={documentations.image.link}
              alt={documentations.image.title}
              width={1919}
              height={896}
            />
          </div>
          <p className="text-center text-xs">{documentations.image.title}</p>
        </div>
      </div>
      <div>
        <h3 className="my-2 text-2xl font-semibold">About {about.name}</h3>
        <p>{about.description} </p>
      </div>
    </section>
  );
}
