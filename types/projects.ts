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
  title: string;
  company: {
    logo: string;
    associated: string;
  };
  tools: string[];
  documentations: Documentations;
};
