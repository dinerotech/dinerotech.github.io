import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="text-base/7 font-semibold text-sky-600">
          {t.blog.heroSection.tagline}
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-relaxed sm:leading-relaxed">
          {t.blog.heroSection.title}
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {t.blog.heroSection.description}
        </p>
      </div>
      <div className="my-10 border-t border-gray-200 sm:my-16"></div>
    </div>
  );
}
