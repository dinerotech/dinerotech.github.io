import type { NextConfig } from "next";
import nextra from "nextra";
import { LOCALE_IDENS, DEFAULT_LOCALE_IDEN } from "@/domain/locale/constants";

const withNextra = nextra({
  theme: "./src/presentation/theme/view.tsx"
});

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  i18n: {
    locales: LOCALE_IDENS,
    defaultLocale: DEFAULT_LOCALE_IDEN
  }
};

export default withNextra(nextConfig);
