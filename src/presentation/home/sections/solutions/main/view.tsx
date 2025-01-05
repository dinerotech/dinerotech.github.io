import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import SideView from "@/presentation/home/sections/solutions/side/view";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);

  return (
    <div className="overflow-hidden bg-slate-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-sky-600">
                {t.home.solutionsSection.tagline}
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {t.home.solutionsSection.title}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {t.home.solutionsSection.description}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href={`${locale.identifier}/solutions`}
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  {t.home.solutionsSection.cta} &nbsp;
                  <span aria-hidden="true">
                    {locale.direction === "ltr" ? "→" : "←"}{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <SideView />
        </div>
      </div>
    </div>
  );
}
