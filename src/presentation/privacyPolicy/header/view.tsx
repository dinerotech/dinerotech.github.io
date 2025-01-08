import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo02SVG from "@/assets/svgs/logo02.svg";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);
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
              <Image className="h-8 w-auto" src={Logo02SVG} alt="logo" />
            </Link>
            <span className="text-lg uppercase font-bold text-gray-400">
              {t.home.privacyPolicy}
            </span>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4" />
      </nav>
    </header>
  );
}
