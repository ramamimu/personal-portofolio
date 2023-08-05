import Link from "next/link";
import NextImage from "../tools/nextImage";

export default function ContactPage() {
  return (
    <section className="bg-slate-800 px-10 py-10">
      <section className="container mx-auto flex items-center justify-around text-slate-100">
        <section className="flex flex-col gap-5">
          <div className="">
            <h3 className="text-3xl font-bold">contact me @</h3>
            <p className="my-2">
              <span className="">ahm.f.ramadhani@gmail.com</span>
            </p>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold">follow me On</h3>
            <div className="flex gap-5 py-2">
              <Link href="https://github.com/ramamimu" target="_blank">
                <div className="rounded-full transition-all duration-300 hover:bg-slate-200 hover:shadow-lg hover:shadow-white">
                  <NextImage
                    src="/social-media/github.png"
                    width={50}
                    height={50}
                    alt="github"
                  />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmad-ferdiansyah-ramadhani/"
                target="_blank"
              >
                <div className="rounded-xl transition-all duration-300 hover:bg-slate-200 hover:shadow-lg hover:shadow-white">
                  <NextImage
                    src="/social-media/linkedin.png"
                    width={50}
                    height={50}
                    alt="linkedin"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
        <div>
          <p className="text-3xl font-bold">Made by Me with 🖤</p>
          <p className="text-xl font-bold">Thank You</p>
        </div>
      </section>
    </section>
  );
}
