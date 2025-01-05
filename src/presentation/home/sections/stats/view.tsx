import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-300">
              {t.home.statsSection.stats1.description}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
              {t.home.statsSection.stats1.counter}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-300">
              {t.home.statsSection.stats2.description}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
              {t.home.statsSection.stats2.counter}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-300">
              {t.home.statsSection.stats3.description}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
              {t.home.statsSection.stats3.counter}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
