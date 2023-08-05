type Documentations = {
  image: {
    title: string;
    link: string;
  };
  links: {
    name: string;
    link: string;
  }[];
};

export type TopComponent = {
  title: string;
  company: {
    logo: string;
    associated: string;
  };
  description: string;
  tools: string[];
};

export type BottomComponent = {
  tools: string[];
  documentations: Documentations;
  about: {
    name: string;
    description: string;
  };
};

type Project = TopComponent & BottomComponent;

export const projects: Project[] = [
  {
    title: "Recommendation Places App in Yogyakarta",
    company: {
      associated: "Project Capstone Bangkit",
      logo: "/icons/bangkit.png",
    },
    description:
      "Working alongside Thariq, one of my friend from Veteran University Jakarta. I played a role in designing the cloud architecture, which included two integrated microservices deployed on Cloud Run. The main server, built with Node.js, served as the central communication gateway for the Android app, handling authentication and data exchange. The second server, an SQL server built with NestJS and typescript, implemented caching with redis to optimize performance by storing logical results from the Google Maps API. We also established a connection pool to MySQL for efficient data retrieval.",
    tools: [
      "Node.js",
      "NestJS",
      "Typescript",
      "Redis",
      "MySQL",
      "docker",
      "Cloud Run",
    ],
    documentations: {
      image: {
        link: "/projects/capstone.png",
        title: "Cloud Architecture",
      },
      links: [
        {
          name: "github main server",
          link: "https://github.com/ramamimu/bangkit-server-main",
        },
        {
          name: "github SQL server",
          link: "https://github.com/ramamimu/bangkit-server-sql",
        },
      ],
    },
    about: {
      name: "Project Capstone Bangkit",
      description:
        "Project Capstone Bangkit is the final project that students enrolled in the Google Bangkit program undertake as part of their learning journey. The Google Bangkit program is a collaborative project-based learning initiative aimed at producing skilled and job-ready tech professionals in Indonesia. It is a joint effort by Google, Gojek, Tokopedia, and Traveloka. The program offers a comprehensive curriculum in various technology tracks, including Android, Cloud Computing, Machine Learning, and Web Development. Throughout the program, students undergo rigorous training, hands-on workshops, and mentorship from industry experts to enhance their technical skills.",
    },
  },
  {
    title: "Monitoring and Controlling Turbines Website",
    company: {
      associated: "PLN Nusantara Power",
      logo: "/icons/pln.png",
    },
    description:
      "I am responsible to both front-end and back-end to build an integrated monitoring system. I use vue.js, tailwind CSS, typescript, pinia for global state management for front-end. On the back-end, I am utilizing node.js and express for API and session management also dev an integrated server with Postgres database. Additionally, I also implement docker for deploy the app and set up a simple Github workflow to check code quality by a linter.",
    tools: [
      "Vue.js",
      "Tailwind CSS",
      "Apexchart",
      "Docker",
      "Node.js",
      "Express session",
      "Typescript",
      "MySQL",
    ],
    documentations: {
      image: {
        link: "/projects/pjb-pln.png",
        title: "controlling turbine page",
      },
      links: [],
    },
    about: {
      name: "Project",
      description:
        "This is a project to make and build monitoring and controlling system on PJB Gresik. there are a lot of portion of engineer jobs, such as ml, backend, frontend, etc. i have responsibilty to make UI and server which connected system to end-user and sometimes help to evaluate and build back-end system. My work partners are Mas Pandu as ROS and back-end engineering and Mas Topek as back-end engineer, help me to build the UI, and also help me a lot to explain the requirements of project. we were coordinated by Bapak Muhtadin, a lecturer Department of Computer Engineering in ITS Surabaya.",
    },
  },
  {
    title: "Basestation IRIS 2023",
    company: {
      associated: "IRIS ITS",
      logo: "/icons/iris-its.png",
    },
    description:
      "The Basestation in this context refers to the central control system that manages and communicates with the robots on the field. It provides real-time data exchange and coordination between the robots, allowing them to make decisions and execute strategies during the game. I had the privilege of working on an exciting project as the basestation developer for the esteemed KRI (Indonesia Robotic Contest) and RoboSoccerCup middle-size league.",
    tools: [
      "Vue.js",
      "Tailwind CSS",
      "Pinia",
      "Vue Konva (Canvas)",
      "Node.js",
      "Socket.IO",
      "Roslib.js",
      "Web Socket",
      "Robot Operating System (ROS)",
      "boost c++ library",
      "UDP unicast protocol",
      "UDP multicast protocol",
      "TCP protocol",
    ],
    documentations: {
      image: {
        link: "/projects/bs-2023.png",
        title: "UI Basestation 2023",
      },
      links: [
        {
          name: "github front-end basestation",
          link: "https://github.com/ramamimu/fe-basestation_2023",
        },
      ],
    },
    about: {
      name: "Basestation IRIS 2023",
      description:
        "Our goal was to develop a robust platform for managing and monitoring autonomous robotic competitions. Here are the key highlights: 1) Front-end: We utilized Vue.js, Pinia for state management, Tailwind CSS for visually appealing designs, and Vue-Konva for advanced canvas functionalities. Real-time rendering and communication capabilities were seamlessly integrated to deliver immersive user experiences. 2) Servers: Users could switch between a Node.js server and the Robot Operating System (ROS) using Socket.IO for real-time communication with Node.js and ROSLib.js for interacting with ROS. 3) Back-end: We developed two server implementations using JavaScript and CPP (C++). Both backends processed data streams from robots, transforming them into global data. This data was sent back to the robots in real-time for precise control and transmitted to the front-end for captivating animations. 4) Communication Protocols: We implemented UDP multicast, UDP unicast, and TCP protocols for efficient and reliable data exchange within the network, adhering to the 2 Mb/s data communication limit imposed by international event regulations. Techniques like buffering and binary communication were utilized for optimized data transfer. 5) Referee Box Integration: The basestation connected to and processed data from the referee box, ensuring accurate and timely actions. Commands and signals from the referee box were transmitted in real-time to the robots during matches.",
    },
  },
  {
    title: "Website IRIS 2022",
    company: {
      associated: "IRIS ITS",
      logo: "/icons/iris-its.png",
    },
    description:
      "In this project, i utilized Next.js, a cutting-edge React framework, and the versatile Tailwind CSS library to create visually stunning and responsive landing pages. Each landing page was meticulously crafted to effectively communicate the unique value propositions and key messages of IRIS ITS.",
    tools: ["React.js", "Next.js", "Tailwind CSS", "Headless UI"],
    documentations: {
      image: {
        link: "/projects/iris-web.png",
        title: "IRIS Website 2022",
      },
      links: [
        {
          name: "IRIS website",
          link: "https://frontend-website-iris.vercel.app/",
        },
      ],
    },
    about: {
      name: "IRIS Website",
      description:
        "As a key contributor to the IRIS ITS website project, I played a crucial role in all captivating landing pages using Next.js and Tailwind CSS. The IRIS ITS website serves as a powerful online platform that showcases the innovation and achievements of the Institute of Robotics and Intelligent Systems (IRIS) at the Institut Teknologi Sepuluh Nopember (ITS).",
    },
  },
  {
    title: "Library Database System",
    company: {
      associated: "ITS Surabaya",
      logo: "/icons/its-surabaya.png",
    },
    description:
      "I was responsible for building the front-end and server, while my friends Surya, Azzura, Rafif, and Toni built the database system, including queries, relations, and an active database using Postgres. This project was developed as a final project for the Database Management System course at ITS, Surabaya.",
    tools: ["Vue.js", "Tailwind CSS", "Chart.js", "Node.js", "Express"],
    documentations: {
      image: {
        link: "/projects/library-db.png",
        title: "UI Library Management System",
      },
      links: [
        {
          name: "github source code",
          link: "https://github.com/ramamimu/vue-postgreesql-chartjs",
        },
      ],
    },
    about: {
      name: "Basestation IRIS 2022",
      description:
        "The software has received recognition in several competitions where it was used as the Basestation, including first place in the Indonesia Robotic Contest 2022 in Surabaya, Indonesia and third place in the RoboCupSoccer Middle Size 2022 in Bangkok, Thailand.",
    },
  },
  {
    title: "Basestation IRIS 2022",
    company: {
      associated: "IRIS ITS",
      logo: "/icons/iris-its.png",
    },
    description:
      "The software has received recognition in several competitions where it was used as the Basestation, including first place in the Indonesia Robotic Contest 2022 in Surabaya, Indonesia and third place in the RoboCupSoccer Middle Size 2022 in Bangkok, Thailand.",
    tools: [
      "Vue.js",
      "Vuex",
      "Vuetify",
      "Vue Konva (Canvas)",
      "Node.js",
      "Roslib.js",
      "Web Socket",
      "TCP protocol",
    ],
    documentations: {
      image: {
        link: "/projects/bs-2022.png",
        title: "UI Basestation 2022",
      },
      links: [
        {
          name: "Demonstration basestation IRIS 2022",
          link: "https://www.linkedin.com/posts/ahmad-ferdiansyah-ramadhani_vuejs-activity-6958097936173973504-A17f?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    about: {
      name: "Basestation IRIS 2022",
      description:
        "The Basestation is a software that connects robots to a communication protocol (UDP or TCP) between robots and the referee box.  The referee box is a tool that connects two Basestations using TCP protocols. It also connects two teams in the field. The referee box sends a signal to each team, and the Basestations from each team process and forward the message to the robots. The communication between robots and the Basestation involves the sharing of data and the counting of robot messages. The data allows the Basestation to visualize the position of each robot, ball, or other features in real-time, based on the messages received. This requires real-time communication and animation to ensure that all data is clear and also the software serves as a debugging platform to detect any bugs or errors in the robot's algorithm, messages, and shared global data through the determined protocol communication.",
    },
  },
  {
    title: "Front-end TedxITS 2022",
    company: {
      associated: "ITS Surabaya",
      logo: "/icons/its-surabaya.png",
    },
    description:
      "As a responsible developer involved in the development and construction of the TedxITS website, I successfully contributed to the creation of an impressive platform for the main event. This platform serves as a user-friendly ticket reservation system, enabling seamless ticket bookings.",
    tools: ["React.js", "Next.js", "Typescript", "Tailwind CSS", "Headless UI"],
    documentations: {
      image: {
        link: "/projects/tedx-its.png",
        title: "Landing Page TedxITS 2022",
      },
      links: [
        {
          name: "Website TedxITS 2022",
          link: "https://2022.tedxits.org/",
        },
      ],
    },
    about: {
      name: "TedxITS 2022",
      description:
        "In this project, we utilized cutting-edge technologies such as Next.js, TypeScript, and Tailwind CSS to develop various components that enhance the overall functionality and visual appeal of the website. Additionally, we dedicated significant efforts to designing captivating landing pages that effectively engage the audience. By leveraging my expertise and collaborating with a talented team, we delivered a captivating and feature-rich website that not only facilitated ticket reservations but also provided an immersive user experience. It was a remarkable journey that allowed us to showcase our technical skills and creativity in delivering an exceptional online platform for the TedxITS 2022 event.",
    },
  },
];
