type Organization = {
  name: string;
  logo: string;
};

export type Experience = {
  name: string;
  duration: string;
  icon: string;
  link: string;
  positions: string[];
  projects: string[];
  jobDescription: string;
  about: string;
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
  {
    name: "Gojek",
    logo: "/icons/gojek.png",
  },
];

export const experiences: Experience[] = [
  {
    name: "ITS Surabaya",
    duration: "Aug 2020 - currently ",
    icon: "/icons/its-surabaya.png",
    link: "https://www.its.ac.id/id/beranda/",
    positions: [
      "Bachelor's Degree",
      "Net Centric Computing Laboratory Assistant",
      "Operating System Course Assistant",
    ],
    projects: [
      "Chatbot RAG (Retrieval-Augmented Generation)",
      "Library Database System",
      "Web Scrapping",
    ],
    jobDescription:
      "As an undergraduate student at ITS Surabaya, you will have the opportunity to embark on an enriching academic journey and be part of a vibrant and innovative learning community. During your time at ITS, you will play a vital role in shaping your future career and personal growth. ITS offers a wide range of undergraduate programs across various disciplines, including engineering, science, technology, business, and more. You can choose a program that aligns with your interests and career aspirations.",
    about:
      "Sepuluh Nopember Institute of Technology (Indonesian: Institut Teknologi Sepuluh Nopember, lit. '10th of November Institute of Technology'; abbreviated as ITS) is a national public university located in Surabaya, East Java, with a strong emphasis on scientific, engineering, and vocational education system. Located on 180-hectares green area, ITS is home to more than 1,000 faculty members and over 20,000 undergraduate and graduate students.",
  },
  {
    name: "IRIS ITS",
    duration: "May 2021 - June 2023",
    icon: "/icons/iris-its.png",
    link: "https://iris.its.ac.id/",
    positions: ["Software Engineer", "Network Programming Engineer"],
    projects: ["Basestation 2022", "Website IRIS 2022", "Basestation 2023"],
    jobDescription:
      "As a part of Programming Division. I am responsible as a software engineer for connecting and communicating as data stream between robot-soccers (also known as basestations) and referee box ( software as a referee during the matches ). The software is based on a web browser and utilizes UDP multicast - unicast, TCP, socket.IO, roslib.js, ROS ( Robot Operating System ) and node.js as the back-end also Vue.js as the front-end framework. The software must meet certain requirements such as real-time animation and communication, as well as being stable and robust.",
    about:
      "ITS Robot with Intelligence System or known as IRIS is a Robotics team Institut Teknologi Sepuluh Nopember (ITS) which focuses on autonomous soccer game robots. Since being developed in 2017, IRIS ITS has competed in soccer robotics especially middle size league, since 2017 and managed to make many achievements. The team consists of students from Institute of Teknologi Sepuluh Nopember Surabaya.",
  },
  {
    name: "Bangkit",
    duration: "Feb 2023 - Jul 2023 ",
    icon: "/icons/bangkit.png",
    link: "https://www.linkedin.com/company/bangkit-academy/",
    positions: ["Cloud Computing Learning Path"],
    projects: ["Capstone Project"],
    jobDescription:
      "During the program, I delved into cloud computing concepts and tools, mastering Google Cloud Platform (GCP) to drive innovation. I collaborated with diverse peers and experts on projects showcasing cloud's power. We developed cloud-native applications, designed data processing pipelines, and built scalable systems. One highlight of the program was working on a team project where we utilized GCP services such as Compute engine, cloud run, and cloud SQL to develop a highly available and scalable web application. This hands-on experience allowed me to apply cloud best practices, optimize performance, and ensure cost efficiency.",
    about:
      "Bangkit is a unique career readiness program led by Google and delivered with support from industry experts from our industry partners like Gojek, GoTo and Google. The program is designed to provide the participants with first-hand exposure to real-world practitioners and prepare them with relevant skills for a successful career in leading tech companies.",
  },
  {
    name: "PLN Nusantara Power, Gresik",
    duration: "Feb 2023 - Jul 2023 ",
    icon: "/icons/pln.png",
    link: "https://www.linkedin.com/company/bangkit-academy/",
    positions: ["Full Stack Developer"],
    projects: ["Monitoring and Controlling Turbine Website"],
    jobDescription:
      "I am responsible to both front-end and back-end to build an integrated monitoring system. I use vue.js, tailwind CSS, typescript, pinia for global state management for front-end. On the back-end, I am utilizing node.js and express for API and session management also dev an integrated server with Postgres database. Additionally, I also implement docker for deploy the app and set up a simple Github workflow to check code quality by a linter.",
    about:
      "PT PLN Nusantara Power, known as PLN NP, is a sub-holding of PT PLN (Persero) which is engaged in the field of electricity generation and other supporting businesses. Established since October 3, 1995, PT PLN NP have never stopped offering a variety of power generation solutions to meet the needs of reliable and quality electricity. PLN NP continuously strives to take more greater role and contribution in supporting national energy security in terms of electricity supply by managing assets amounting to IDR 174.78 Trillion and contributing 28% of the total national generating capacity.",
  },
  {
    name: "GoTo - Gojek",
    duration: "Aug 2023 - December 2023",
    icon: "/icons/gojek.png",
    link: "linkedin.com/company/gotogroup/",
    positions: ["Software Engineer Intern"],
    projects: [
      "Weekly Tracker KPI Automation",
      "FBON Service",
      "Web Concierge",
    ],
    jobDescription:
      "Part of 32 interns at GoTo, selected over 7600++ applicants under Kampus Merdeka program batch 5 from ministry of education Indonesia. I was placed on Gojek, being part of Transport Team and mentored by Swatantra Jain. I got some various tasks here are all of them| Weekly tracker automation: managing metrics data from 15++ teams at Transport and Driver platform; FBON service: Inject middleware to get order number and request ID through Golang-context; Web Concierge: Create OTP component in front end Web Concierge dashboard",
    about:
      "Gojek is Southeast Asia's leading on-demand, multi-service tech platform providing access to a wide range of services across transport, payments, food delivery, logistics, and many more.",
  },
];
