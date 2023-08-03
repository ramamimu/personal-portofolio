import NextImage from "../tools/nextImage";

export default function DescriptionOrg() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-28 px-10 py-10 font-monserrat">
      <CenterDescription />
      <CenterDescription />
      <CenterDescription />
      <CenterDescription />
    </section>
  );
}

function CenterDescription() {
  return (
    <section className="relative col-span-2 mx-10 w-[500px] rounded-md shadow-2xl shadow-slate-500">
      <div className="absolute -right-16 top-10 inline-block rounded-full bg-slate-100 p-5">
        <NextImage src="/icons/iris-its.png" alt="" height={150} width={150} />
      </div>
      <div className="p-10">
        <div>
          <h2 className="text-3xl font-semibold">IRIS ITS</h2>
          <div className="py-5 pt-2">
            <p>Software Engineer</p>
            <p>Network Programming Engineer</p>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-2xl font-semibold">Projects</h3>
            <p>Basestation 2022</p>
            <p>Website IRIS 2022</p>
            <p>Basestation 2023</p>
          </div>
          <div className="my-10">
            <h3 className="text-2xl font-semibold">Job Desc</h3>
            <p>
              As a part of Programming Division. I am responsible as a software
              engineer for connecting and communicating as data stream between
              robot-soccers (also known as basestations) and referee box (
              software as a referee during the matches ). The software is based
              on a web browser and utilizes UDP multicast - unicast, TCP,
              socket.IO, roslib.js, ROS ( Robot Operating System ) and node.js
              as the back-end also Vue.js as the front-end framework. The
              software must meet certain requirements such as real-time
              animation and communication, as well as being stable and robust.
            </p>
          </div>
          <div className="my-10">
            <h3 className="text-2xl font-semibold">About IRIS</h3>
            <p>
              ITS Robot with Intelligence System or known as IRIS is a Robotics
              team Institut Teknologi Sepuluh Nopember (ITS) which focuses on
              autonomous soccer game robots. Since being developed in 2017, IRIS
              ITS has competed in soccer robotics especially middle size league,
              since 2017 and managed to make many achievements. The team
              consists of students from Institute of Teknologi Sepuluh Nopember
              Surabaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
