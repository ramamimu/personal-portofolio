import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Chatbot Using Retrieval-Augmented Generation (RAG)",
    company: {
      associated: "ITS Surabaya",
      logo: "/images/companies/its-surabaya.png",
    },
    tools: [
      "Python",
      "Langchain",
      "FastApi",
      "Huggingface",
      "Multilingual E5 Small - Sentence Transformer Model",
      "GPT3.5 Turbo - Text Generation Model",
      "FAISS",
      "Alembic - Database Migration",
      "Docker",
    ],
    documentations: {
      image: {
        link: "/images/projects/chatbot-api.png",
        title: "Chatbot API service",
      },
      links: [
        {
          name: "github",
          link: "https://github.com/ramamimu/chatbot-api",
        },
        {
          name: "demo",
          link: "https://www.linkedin.com/posts/ahmad-ferdiansyah-ramadhani_usercentereddesign-chatbotdevelopment-uiuxdesign-activity-7226098590736117760-xdq8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTX4BMBZj78V4xqB5uEOcBcvAfISOSIFRc",
        },
      ],
    },
  },
  {
    title: "Recommendation Places App in Yogyakarta",
    company: {
      associated: "Project Capstone Bangkit",
      logo: "/images/companies/bangkit.png",
    },
    tools: [
      "Node.js",
      "NestJS",
      "Typescript",
      "Redis",
      "MySQL",
      "docker",
      "Google Cloud Platform",
      "Cloud Build",
      "Cloud Run",
    ],
    documentations: {
      image: {
        link: "/images/projects/capstone.png",
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
  },
  {
    title: "Monitoring and Controlling Turbines Website",
    company: {
      associated: "PLN Nusantara Power",
      logo: "/images/companies/pln.png",
    },
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
        link: "/images/projects/pjb-pln.png",
        title: "controlling turbine page",
      },
      links: [],
    },
  },
  {
    title: "Basestation IRIS",
    company: {
      associated: "IRIS ITS",
      logo: "/images/companies/iris-its.png",
    },
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
      "Vuex",
      "Vuetify",
      "UDP",
      "TCP",
    ],
    documentations: {
      image: {
        link: "/images/projects/bs-2023.png",
        title: "UI Basestation 2023",
      },
      links: [
        {
          name: "github front-end",
          link: "https://github.com/ramamimu/fe-basestation_2023",
        },
        {
          name: "Demo",
          link: "https://www.linkedin.com/posts/ahmad-ferdiansyah-ramadhani_vuejs-activity-6958097936173973504-A17f?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
  },
  {
    title: "Website IRIS 2022",
    company: {
      associated: "IRIS ITS",
      logo: "/images/companies/iris-its.png",
    },
    tools: ["React.js", "Next.js", "Tailwind CSS", "Headless UI"],
    documentations: {
      image: {
        link: "/images/projects/iris-web.png",
        title: "IRIS Website 2022",
      },
      links: [
        {
          name: "IRIS website",
          link: "https://frontend-website-iris.vercel.app/",
        },
      ],
    },
  },
  {
    title: "Front-end TedxITS 2022",
    company: {
      associated: "ITS Surabaya",
      logo: "/images/companies/its-surabaya.png",
    },
    tools: ["React.js", "Next.js", "Typescript", "Tailwind CSS", "Headless UI"],
    documentations: {
      image: {
        link: "/images/projects/tedx-its.png",
        title: "Landing Page TedxITS 2022",
      },
      links: [],
    },
  },
];
