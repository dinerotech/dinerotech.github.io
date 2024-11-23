import "nextra-theme-blog/style.css";
import BlogTheme from "nextra-theme-blog";
import blogConfig from "./config";
import LayoutProps from "../interface";

export default function Layout({ children, pageOpts, pageProps }: LayoutProps) {
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
