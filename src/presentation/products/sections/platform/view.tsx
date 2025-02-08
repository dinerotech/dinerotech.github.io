import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div id="platform" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-sky-600">
              {t.products.othersSection.tagline}
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight sm:leading-tight">
              {t.products.othersSection.title}
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              {t.products.othersSection.description}
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {t.products.othersSection.points.map((item, index) => (
              <div key={index} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <svg
                    className="absolute left-0 top-1 size-5 text-sky-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.title}
                </dt>
                <dd className="mt-2">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
