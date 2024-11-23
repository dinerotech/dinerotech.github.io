import "nextra-theme-docs/style.css";
import DocsTheme from "nextra-theme-docs";
import docsConfig from "./config";
import LayoutProps from "../interface";

export default function Layout({ children, pageOpts, pageProps }: LayoutProps) {
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
