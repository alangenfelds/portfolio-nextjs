interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  image: Image;
  profilePic: Image;
  name: string;
  phoneNumber: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
  progress: number;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
  progress: number;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  jobTitle: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentWorkPlace: boolean;
  points: string[];
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
