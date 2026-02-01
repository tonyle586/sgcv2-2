export type Language = 'vn' | 'en';
export type Theme = 'dark' | 'light';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  result: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  common: {
    getStarted: string;
    learnMore: string;
    contactUs: string;
    viewProject: string;
    sendMessage: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    sending: string;
    copyright: string;
    language: string;
    theme: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    whyChooseUs: string;
    whyChooseUsDesc: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    techEdgeTitle: string;
    techEdgeDesc: string;
  };
  services: {
    title: string;
    subtitle: string;
    categories: {
      domain: string;
      wordpress: string;
      ai: string;
      qr: string;
      automation: string;
      other: string;
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    office: string;
    formTitle: string;
  };
  thankYou: {
    title: string;
    message: string;
    backHome: string;
  };
}
