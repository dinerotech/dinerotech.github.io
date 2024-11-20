import "nextra-theme-docs/style.css";
import DocsTheme from "nextra-theme-docs";
import docsConfig from "./config";
import type {
  Folder,
  MdxFile,
  NextraThemeLayoutProps,
  PageMapItem
} from "nextra";

function hasRoute(item: PageMapItem): item is MdxFile {
  return "route" in item && typeof item.route === "string";
}

export default function DocsLayout({
  children,
  pageOpts,
  pageProps
}: NextraThemeLayoutProps) {
  console.log(pageOpts.pageMap)
  // const docsPageMap =
  //   (
  //     pageOpts.pageMap.find(
  //       (item) => hasRoute(item) && item.route === "/docs"
  //     ) as Folder
  //   ).children || pageOpts.pageMap;

  // pageOpts = {
  //   ...pageOpts,
  //   pageMap: docsPageMap
  // };

  // docsPageMap.map((item) => {
  //   console.log(item);
  // });

  return (
    <DocsTheme
      pageOpts={pageOpts}
      pageProps={pageProps}
      themeConfig={docsConfig}
    >
      {children}
    </DocsTheme>
  );
}
