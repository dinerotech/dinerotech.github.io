import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-5xl py-24 sm:py-36 lg:py-56">
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl leading-tight sm:leading-tight">
            {t.products.heroSection.title}
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
            {t.products.heroSection.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#payment-methods"
              className="text-sm/6 font-semibold text-white"
            >
              {t.products.heroSection.cta}
              <br />
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
