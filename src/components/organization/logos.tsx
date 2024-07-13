import NextImage from "@/components/tools/nextImage";

import { organizationLogos } from "@/types/organizations";

export default function Logos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-10">
      {organizationLogos.map((item) => {
        return (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center gap-3 font-medium text-slate-50"
          >
            <div className="inline-block rounded-full bg-slate-200 p-5">
              <NextImage src={item.logo} height={50} width={50} alt="" />
            </div>
            <p>{item.name}</p>
          </div>
        );
      })}{" "}
    </div>
  );
}
