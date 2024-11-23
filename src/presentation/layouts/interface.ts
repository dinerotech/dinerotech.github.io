/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageOpts } from "nextra";

export default interface LayoutProps {
  children: React.ReactNode;
  pageOpts: PageOpts;
  pageProps: any;
}
