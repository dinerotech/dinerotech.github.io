import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl leading-tight sm:leading-tight">
          {t.products.ctaSection.title1}
          <br />
          {t.products.ctaSection.title2}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="#"
            className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            {t.home.contactSales}
          </a>
          <a
            href="#"
            className="rounded-md bg-white px-3 py-2 text-sm/6 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {t.home.productsSection.section4.cta}
            &nbsp;
            <span aria-hidden="true">
              {locale.direction === "ltr" ? "→" : "←"}{" "}
            </span>
          </a>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#FFFBEB" />
            <stop offset="1" stopColor="#0EA5E9" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
