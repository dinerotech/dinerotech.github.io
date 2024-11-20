import type { DocsThemeConfig } from "nextra-theme-docs";
import { LOCALES } from "@/domain/locale/constants";

const config: DocsThemeConfig = {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: "https://github.com/shuding/nextra"
  },
  i18n: LOCALES.map((item) => ({ locale: item.identifier, direction: item.direction, name: item.name }))
  // ... other theme options
};

export default config;
