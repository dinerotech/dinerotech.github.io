import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo02SVG from "@/assets/svgs/logo02.svg";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import { MAIN_NAV } from "@/domain/navs/constants";
import { LOCALES } from "@/domain/locale/constants";

export interface ViewProps {
  onHide: () => void;
}

export default function View({ onHide }: ViewProps) {
  const { locale, resource: t } = React.useContext(LocaleContext);
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-10"></div>
      <div
        className={`fixed inset-y-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${locale.direction == "ltr" ? "right-0" : "left-0"}`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">DineroPay</span>
            <Image className="h-8 w-auto" src={Logo02SVG} alt="logo" />
          </a>
          <button
            type="button"
            onClick={onHide}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{t.home.closeMenu}</span>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {MAIN_NAV.map((item, index) => (
                <Link
                  key={index}
                  href={`/${locale.identifier}/${item.href}`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t.home[item.identifier as keyof typeof t.home]}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href={locale.identifier === "ar" ? "/en" : "/ar"}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {locale.identifier === "ar" ? LOCALES[0].name : LOCALES[1].name}
              </Link>
              <a
                href="https://dashboard.dineropay.com/"
                target="_blank"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {t.home.signIn}
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                {t.home.contactSales}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
