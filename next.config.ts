import type { NextConfig } from "next";
import nextra from "nextra";
import { LOCALE_IDENS, DEFAULT_LOCALE_IDEN } from "@/domain/locale/constants";

const withNextra = nextra({
  theme: "./src/presentation/theme/view.tsx"
});

// ✅ Use only the Docs theme
// const withNextra = nextra({
//   theme: "nextra-theme-docs", // ✅ Forces the use of the Docs theme
//   themeConfig: "./src/presentation/layouts/docs/config.tsx" // Optional: Path to your theme config
// });

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true },
  i18n: {
    locales: LOCALE_IDENS,
    defaultLocale: DEFAULT_LOCALE_IDEN
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /_meta\.ts$/,
      use: "null-loader" // ✅ Ignores `_meta.ts` from Next.js page processing
    });
    return config;
  }
};

export default withNextra(nextConfig);
