import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);
  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-3xl leading-relaxed sm:leading-relaxed">
          {t.faqs.ctaSection.description}
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href={`/${locale.identifier}/contact-us`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {t.home.contactUs} &nbsp;
            <span aria-hidden="true">
              {locale.direction === "ltr" ? "→" : "←"}{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
