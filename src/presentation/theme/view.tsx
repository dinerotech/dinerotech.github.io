import React from "react";
import useViewModel from "./viewModel";
import { NextraThemeLayoutProps } from "nextra";
import DocsLayout from "@/presentation/layouts/docs/layout";
// import BlogLayout from "@/presentation/layouts/blog/layout";
import OthersLayout from "@/presentation/layouts/others/layout";

export default function View({
  children,
  pageOpts,
  pageProps
}: NextraThemeLayoutProps) {
  const { layoutType, layoutPageOpts } = useViewModel(pageOpts);

  switch (layoutType) {
    case "docs":
      return (
        <DocsLayout pageOpts={layoutPageOpts} pageProps={pageOpts}>
          {children}
        </DocsLayout>
      );
    // case "blog":
    //   return (
    //     <BlogLayout pageOpts={layoutPageOpts} pageProps={pageProps}>
    //       {children}
    //     </BlogLayout>
    //   );
    // case "jobs":
    // case "article":
    default:
      return (
        <OthersLayout pageOpts={layoutPageOpts} pageProps={pageProps}>
          {children}
        </OthersLayout>
      );
  }
}
