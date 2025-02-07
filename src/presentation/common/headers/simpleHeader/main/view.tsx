import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo04SVG from "@/assets/svgs/logo04.svg";
import Logo02SVG from "@/assets/svgs/logo02.svg";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
// import { MAIN_NAV } from "@/domain/navs/constants";
import MobileView from "@/presentation/home/header/mobile/view";
import useViewModel from "./viewModel";
// import { LOCALES } from "@/domain/locale/constants";

interface ViewProps {
  theme: "light" | "dark";
  title: string;
}

export default function View({ theme, title }: ViewProps) {
  const { locale, resource: t } = React.useContext(LocaleContext);
  const { isMobileViewHidden, onHideMobileView, onShowMobileView } =
    useViewModel();

  return (
    <header className="relative inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12">
          <div className="flex items-center gap-2">
            <Link
              href={locale.identifier === "ar" ? "/ar" : "/en"}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">DineroPay</span>
              {theme === "light" && (
                <Image className="h-8 w-auto" src={Logo02SVG} alt="logo" />
              )}
              {theme === "dark" && (
                <Image className="h-8 w-auto" src={Logo04SVG} alt="logo" />
              )}
            </Link>
            <span
              className={`text-lg uppercase font-bold ${theme === "dark" ? "text-sky-300" : "text-gray-400"}`}
            >
              {title}
            </span>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={onShowMobileView}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
          >
            <span className="sr-only">{t.home.openMenu}</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {/* <Link
            href={locale.identifier === "ar" ? "/en/products" : "/ar/products"}
            className="px-3 py-2 text-sm/6 font-semibold text-gray-100"
          >
            {locale.identifier === "ar" ? LOCALES[0].name : LOCALES[1].name}
          </Link> */}
          <a
            href="https://dashboard.dineropay.com/"
            target="_blank"
            className="rounded-md bg-white px-3 py-2 text-sm/6 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {t.home.signIn}
          </a>
          <a
            href={`/${locale.identifier}/contact-sales`}
            className="rounded-md bg-amber-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            {t.home.contactSales}&nbsp;
            <span aria-hidden="true">
              {locale.direction === "ltr" ? "→" : "←"}{" "}
            </span>
          </a>
        </div>
      </nav>
      {!isMobileViewHidden && <MobileView onHide={onHideMobileView} />}
    </header>
  );
}
