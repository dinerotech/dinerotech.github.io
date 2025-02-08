import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);

  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-sky-600">
          {t.thankYou.contentsSection.formSubmittedSuccessfully}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          {t.thankYou.contentsSection.title}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {t.thankYou.contentsSection.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href={`/${locale.identifier}`}
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            {t.thankYou.contentsSection.goBackHome} &nbsp;
            <span aria-hidden="true">
              {locale.direction === "ltr" ? "→" : "←"}{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
