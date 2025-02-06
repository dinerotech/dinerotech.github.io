export interface LocalePto {
  identifier: string;
  name: string;
  direction: "ltr" | "rtl";
}

export interface LocaleResourcePto {
  title: string;
  description: string;
  home: {
    signIn: string;
    products: string;
    aboutUs: string;
    developers: string;
    partners: string;
    blog: string;
    solutions: string;
    contactSales: string;
    closeMenu: string;
    openMenu: string;
    //
    slogan: string;
    sloganDescription: string;
    contactUs: string;
    learnMore: string;
    wereHiring: string;
    seeOpenPositions: string;
    joinUs: string;
    getStarted: string;
    //
    trustedByTeams: string;
    resources: string;
    copyrights: string;
    paymentsMethods: string;
    invoicing: string;
    platform: string;
    dashboard: string;
    onboarding: string;
    pricing: string;
    startups: string;
    enterprises: string;
    saas: string;
    ecommerce: string;
    nonprofit: string;
    guides: string;
    plugins: string;
    integration: string;
    APIReference: string;
    faqs: string;
    customerStories: string;
    becomeAPartner: string;
    jobs: string;
    termsOfService: string;
    privacyPolicy: string;
    //
    banner: {
      title: string;
      description: string;
    };
    solutionsSection: {
      title: string;
      tagline: string;
      description: string;
      cta: string;
    };
    productsSection: {
      title: string;
      tagline: string;
      section1: {
        title: string;
        description: string;
      };
      section2: {
        title: string;
        description: string;
      };
      section3: {
        title: string;
        description: string;
      };
      section4: {
        title: string;
        description: string;
        cta: string;
      };
    };
    statsSection: {
      tagline: string;
      title: string;
      stats1: {
        value: string;
        title: string;
        description: string;
      };
      stats2: {
        value: string;
        title: string;
        description: string;
      };
      stats3: {
        value: string;
        title: string;
        description: string;
      };
    };
    testimonialsSection: {
      title: string;
      subTitle: string;
      testimonials: {
        message: string;
        author: string;
        company: string;
      }[];
    };
    blogSection: {
      title: string;
      subTitle: string;
      categories: {
        marketing: string;
        developers: string;
        management: string;
      };
    };
    ctaSection: {
      title: string;
      description: string;
    };
  };
  products: {
    heroSection: {
      title: string;
      subtitle: string;
      cta: string;
    };
    paymentsSection: {
      title: string;
      description: string;
    };
    onboardingSection: {
      title: string;
      tagline: string;
      description: string;
    };
    dashboardSection: {
      title: string;
      tagline: string;
      description: string;
      quote: string;
    };
    othersSection: {
      title: string;
      tagline: string;
      description: string;
      points: {
        title: string;
        description: string;
      }[];
    };
    pluginsSection: {
      title: string;
    };
    ctaSection: {
      title1: string;
      title2: string;
    };
  };
  aboutUs: {
    heroSection: {
      title: string;
      subtitle: string;
    };
    companySection: {
      vision: {
        title: string;
        tagline: string;
        contents: string;
        closing: string;
      };
      mission: {
        title: string;
        tagline: string;
        contents: string;
        closing: string;
      };
    };
    timelineSection: {
      events: {
        date: string;
        title: string;
        contents: string;
      }[];
    };
    teamLetterSection: {
      title: string;
      tagline: string;
      name: string;
      position: string;
      contents: string;
    };
    teamSection: {
      title: string;
      description: string;
    };
    ctaSection: {
      title: string;
      description: string;
      cta: string;
    };
  };
  faqs: {
    heroSection: {
      title: string;
      description: string;
    };
    questionsSection: {
      blocks: {
        question: string;
        answer: string;
      }[];
    };
    ctaSection: {
      description: string;
    };
  };
  contactUs: {
    heroSection: {
      title: string;
      tagline: string;
    };
    officesSection: {
      title: string;
      description: string;
      offices: {
        city: string;
        addressLineOne: string;
        addressLineTwo: string;
      }[];
    };
  };
  contactSales: {
    formBlockContainerSection: {
      title: string;
      description: string;
    };
    formSideSection: {
      message: string;
    };
  };
  joinUs: {
    heroSection: {
      title: string;
      tagline: string;
    };
  };
}
