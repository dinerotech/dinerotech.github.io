export interface LocalePto {
  identifier: string;
  name: string;
  direction: "ltr" | "rtl";
}

export interface LocaleResourcePto {
  title: string;
  description: string;
  home: {
    greatNews: string;
    tabbySupported: string;
    signIn: string;
    products: string;
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
  };
}
