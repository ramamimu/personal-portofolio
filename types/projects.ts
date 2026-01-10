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

export type Project = {
  id: string;
  title: string;
  company: {
    logo: string;
    associated: string;
  };
  tools: string[];
  documentations: Documentations;
  description: string;
};
