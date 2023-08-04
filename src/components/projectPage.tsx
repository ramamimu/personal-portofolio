import ExpandCard from "@/components/tools/expandCard";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <section className="min-h-screen bg-yellow-300 py-10 text-slate-50 ">
      <h2 className="py-10 text-center text-4xl font-semibold text-slate-800">
        My Projects
      </h2>
      <div className="flex justify-center gap-16">
        <ExpandCard
          children1={<TopDescription />}
          children2={<BottomDescription />}
          addedClass="bg-slate-800"
        />
        <ExpandCard
          children1={<TopDescription />}
          children2={<BottomDescription />}
          addedClass="bg-slate-800"
        />
      </div>
    </section>
  );
}

const tools: string[] = ["docker", "ts", "react", "nextjs", "tailwindcss"];

function TopDescription({}) {
  return (
    <section>
      <h2 className="text-3xl font-semibold">
        Recommendation Places App in Yogyakarta
      </h2>
      <div>associate with Project Capstone Bangkit</div>
      <div>
        <h3 className="text-2xl font-semibold">Description</h3>
        <p>
          Working alongside Thariq, I played a role in designing the cloud
          architecture, which included two integrated microservices deployed on
          Cloud Run. The main server, built with Node.js, served as the central
          communication gateway for the Android app, handling authentication and
          data exchange. The second server, an SQL server built with NestJS and
          typescript, implemented caching with redis to optimize performance by
          storing logical results from the Google Maps API. We also established
          a connection pool to MySQL for efficient data retrieval.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Tools</h3>
        {tools.map((tool) => (
          <span key={tool} className="mr-2 rounded-md bg-slate-700 px-2 py-1">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

function BottomDescription({}) {
  return (
    <section>
      <div>
        <h3 className="text-2xl font-semibold">Documentations</h3>
        <div className="flex flex-wrap">
          <Link href="google.com">
            <div className="mx-1 rounded-md bg-slate-500 px-3 py-1">github</div>
          </Link>
          <Link href="google.com">
            <div className="mx-1 rounded-md bg-slate-500 px-3 py-1">github</div>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">
          About Project Capstone Project Bangkit
        </h3>
        <p>
          Working alongside Thariq, I played a role in designing the cloud
          architecture, which included two integrated microservices deployed on
          Cloud Run. The main server, built with Node.js, served as the central
          communication gateway for the Android app, handling authentication and
          data exchange. The second server, an SQL server built with NestJS and
          typescript, implemented caching with redis to optimize performance by
          storing logical results from the Google Maps API. We also established
          a connection pool to MySQL for efficient data retrieval.
        </p>
      </div>
    </section>
  );
}
