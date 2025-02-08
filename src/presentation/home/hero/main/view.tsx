import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import HeroSideView from "@/presentation/home/hero/side/view";
import CTAView from "@/presentation/home/hero/cta/view";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 sm:pb-0 lg:flex lg:px-8">
      <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-4">
        <CTAView
          title={t.home.wereHiring}
          description={t.home.seeOpenPositions}
          href={`/${locale.identifier}/jobs`}
        />
        <h1 className="mt-10 text-pretty text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-tight sm:leading-tight">
          {t.home.slogan}
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          {t.home.sloganDescription}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href={`/${locale.identifier}/join-us`}
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            {t.home.joinUs}
          </a>
          <a
            href={`${locale.identifier}/products`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {t.home.learnMore} &nbsp;
            <span aria-hidden="true">
              {locale.direction === "ltr" ? "→" : "←"}{" "}
            </span>
          </a>
        </div>
      </div>
      <HeroSideView />
    </div>
  );
}
