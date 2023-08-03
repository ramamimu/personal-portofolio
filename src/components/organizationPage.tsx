import Logos from "@/components/organization/logos";
import DescriptionOrg from "./organization/descriptionOrg";

export default function OrganizationPage() {
  return (
    <section className="min-h-screen bg-slate-800 py-20 text-slate-100">
      <h2 className="py-10 text-center text-4xl font-semibold">
        My Growing Places
      </h2>
      <Logos />
      <DescriptionOrg />
    </section>
  );
}
