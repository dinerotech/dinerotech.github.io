import "nextra-theme-blog/style.css";
import BlogTheme from "nextra-theme-blog";
import blogConfig from "./config";
import type {
  NextraThemeLayoutProps,
  PageMapItem,
  PageOpts,
  Folder
} from "nextra";
import type { MdxFile } from "nextra";

function hasRoute(item: PageMapItem): item is MdxFile {
  return "route" in item && typeof item.route === "string";
}
export default function BlogLayout({
  children,
  pageOpts,
  pageProps
}: NextraThemeLayoutProps) {
  // const blogPageMap =
  //   (
  //     pageOpts.pageMap.find(
  //       (item) => hasRoute(item) && item.route === "/blog"
  //     ) as Folder
  //   ).children || pageOpts.pageMap;

  // pageOpts = {
  //   ...pageOpts,
  //   pageMap: blogPageMap
  // };

  return (
    <BlogTheme
      pageOpts={pageOpts}
      pageProps={pageProps}
      themeConfig={blogConfig}
    >
      {children}
    </BlogTheme>
  );
}
