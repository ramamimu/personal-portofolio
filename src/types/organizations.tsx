type Organization = {
  name: string;
  logo: string;
};

export const organizationLogos: Organization[] = [
  {
    name: "ITS Surabaya",
    logo: "/icons/its-surabaya.png",
  },
  {
    name: "IRIS ITS",
    logo: "/icons/iris-its.png",
  },
  {
    name: "Bangkit",
    logo: "/icons/bangkit.png",
  },
  {
    name: "PLN Gresik",
    logo: "/icons/pln.png",
  },
];

export const experiences = [
  {
    name: "IRIS ITS",
    icon: "/icons/iris-its.png",
    link: "https://iris.its.ac.id/",
    positions: ["Software Engineer", "Network Programming Engineer"],
    projects: ["Basestation 2022", "Website IRIS 2022", "Basestation 2023"],
    jobDescription:
      "As a part of Programming Division. I am responsible as a software engineer for connecting and communicating as data stream between robot-soccers (also known as basestations) and referee box ( software as a referee during the matches ). The software is based on a web browser and utilizes UDP multicast - unicast, TCP, socket.IO, roslib.js, ROS ( Robot Operating System ) and node.js as the back-end also Vue.js as the front-end framework. The software must meet certain requirements such as real-time animation and communication, as well as being stable and robust.",
    about:
      "ITS Robot with Intelligence System or known as IRIS is a Robotics team Institut Teknologi Sepuluh Nopember (ITS) which focuses on autonomous soccer game robots. Since being developed in 2017, IRIS ITS has competed in soccer robotics especially middle size league, since 2017 and managed to make many achievements. The team consists of students from Institute of Teknologi Sepuluh Nopember Surabaya.",
  },
];
