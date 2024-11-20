import type { NextraThemeLayoutProps, PageMapItem, PageOpts } from "nextra";
import { useRouter } from "next/router";
import BlogLayout from "./blog/layout";
import DocsLayout from "./docs/layout";
import type { MdxFile } from "nextra";
import { LOCALE_IDENS } from "@/domain/locale/constants";

export default function Layout({
  children,
  pageOpts,
  pageProps
}: NextraThemeLayoutProps) {
  const { pathname } = useRouter();
  const localePattern = LOCALE_IDENS.join("|");

  // Determine theme based on the route
  const isDocs = new RegExp(`^/(${localePattern})/docs`).test(pathname);
  const isBlog = new RegExp(`^/(${localePattern})/blog`).test(pathname);

  if (isDocs) {
    return (
      <DocsLayout pageOpts={pageOpts} pageProps={pageProps} themeConfig={{}}>
        {children}
      </DocsLayout>
    );
  } else if (isBlog) {
    return (
      <BlogLayout pageOpts={pageOpts} pageProps={pageProps} themeConfig={{}}>
        {children}
      </BlogLayout>
    );
  } else {
    return <div />;
  }
}
