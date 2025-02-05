import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import ElementView from "@/presentation/home/sections/stats/element/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 md:mb-10 text-center">
          <p className="text-base/7 font-semibold text-sky-600">
            {t.home.statsSection.tagline}
          </p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t.home.statsSection.title}
          </h2>
        </div>
        <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
          <ElementView
            value={t.home.statsSection.stats1.value}
            title={t.home.statsSection.stats1.title}
            description={t.home.statsSection.stats1.description}
          />
          <ElementView
            value={t.home.statsSection.stats2.value}
            title={t.home.statsSection.stats2.title}
            description={t.home.statsSection.stats2.description}
          />
          <ElementView
            value={t.home.statsSection.stats3.value}
            title={t.home.statsSection.stats3.title}
            description={t.home.statsSection.stats3.description}
          />
        </div>
      </div>
    </div>
  );
}
