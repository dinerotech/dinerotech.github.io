import { Folder, MdxFile, PageMapItem, PageOpts } from "nextra";
import { LocalePto } from "../locale/ptos";
import { PageLayoutType } from "./ptos";
import { DEFAULT_LOCALE_IDEN } from "../locale/constants";
// import { LOCALE_IDENS } from "@/domain/locale/constants"

const LOCALES: LocalePto[] = [
  {
    identifier: "en",
    name: "English",
    direction: "ltr"
  },
  {
    identifier: "ar",
    name: "العربية",
    direction: "rtl"
  }
];

const LOCALE_IDENS: string[] = LOCALES.map((item) => item.identifier);

const localePattern = LOCALE_IDENS.join("|");

const DOCS_REGEXP = new RegExp(`^/(${localePattern})/docs`);
const BLOG_REGEXP = new RegExp(`^/(${localePattern})/blog`);
const JOBS_REGEXP = new RegExp(`^/(${localePattern})/jobs`);

function hasRoute(item: PageMapItem): item is MdxFile {
  return "route" in item && typeof item.route === "string";
}

export function getPageLayoutTypeUseCase(
  pathname: string | null
): PageLayoutType {
  pathname = pathname || "/";
  if (DOCS_REGEXP.test(pathname)) return "docs";
  else if (BLOG_REGEXP.test(pathname)) return "blog";
  else if (JOBS_REGEXP.test(pathname)) return "jobs";
  else return "article";
}

export function getPageOptsUseCase(
  pathname: string | null,
  layoutType: PageLayoutType,
  pageOpts: PageOpts
): PageOpts {
  pathname = pathname || "/";
  if (layoutType === "docs") return getDocsPageOptsUseCase(pathname, pageOpts);
  else if (layoutType === "blog")
    return getBlogPageOptsUseCase(pathname, pageOpts);
  else if (layoutType === "jobs")
    return getJobsPageOptsUseCase(pathname, pageOpts);
  else return pageOpts;
}

function getDocsPageOptsUseCase(
  pathname: string,
  pageOpts: PageOpts
): PageOpts {
  const currentLocale =
    LOCALES.find((locale) => pathname.startsWith(`/${locale.identifier}`))
      ?.identifier || DEFAULT_LOCALE_IDEN;
  const pageMap = pageOpts.pageMap.find(
    (item) => hasRoute(item) && item.route === `/${currentLocale}/docs`
  ) as Folder;
  return {
    ...pageOpts,
    pageMap: pageMap.children
  };
}

function getBlogPageOptsUseCase(
  pathname: string,
  pageOpts: PageOpts
): PageOpts {
  const pageMap = pageOpts.pageMap.find(
    (item) => hasRoute(item) && item.route === "/en/blog"
  ) as Folder;

  return {
    ...pageOpts,
    pageMap: pageMap.children
  };
}

function getJobsPageOptsUseCase(
  pathname: string,
  pageOpts: PageOpts
): PageOpts {
  const currentLocale =
    LOCALES.find((locale) => pathname.startsWith(`/${locale.identifier}`))
      ?.identifier || DEFAULT_LOCALE_IDEN;
  const pageMap = pageOpts.pageMap.find(
    (item) => hasRoute(item) && item.route === `/${currentLocale}/jobs`
  ) as Folder;
  return {
    ...pageOpts,
    pageMap: pageMap.children
  };
}
