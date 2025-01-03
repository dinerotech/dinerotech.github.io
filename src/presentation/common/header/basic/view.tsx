import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo02SVG from "@/assets/svgs/logo02.svg";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export interface ViewProps {
  title?: string;
}

export default function View({ title }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <header className="relative inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-none flex-1 shrink-0 items-center">
          <Link href="/" className="p-1.5">
            <span className="sr-only">DineroPay</span>
            <Image className="h-8 w-auto" src={Logo02SVG} alt="logo" />
          </Link>
          {title && (
            <span className="text-lg uppercase font-bold text-slate-400">
              {title}
            </span>
          )}
        </div>

        <div className="flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href="https://dashboard.dineropay.com/"
            target="_blank"
            className="rounded-md bg-white px-3 py-2 text-sm/6 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {t.home.signIn}
          </a>
        </div>
      </nav>
    </header>
  );
}
