import React from "react";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="mx-auto mt-0 max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            <p className="text-base/7 font-semibold text-sky-600">
              {t.aboutUs.companySection.vision.tagline}
            </p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight sm:leading-tight">
              {t.aboutUs.companySection.vision.title}
            </h2>
            <p className="mt-6 text-xl/8">
              {t.aboutUs.companySection.vision.contents}
            </p>
            <p className="mt-8">{t.aboutUs.companySection.vision.closing}</p>
          </div>
          <div>
            <p className="text-base/7 font-semibold text-sky-600">
              {t.aboutUs.companySection.mission.tagline}
            </p>
            <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {t.aboutUs.companySection.mission.title}
            </h2>
            <p className="mt-6 text-xl/8">
              {t.aboutUs.companySection.mission.contents}
            </p>
            <p className="mt-8">{t.aboutUs.companySection.mission.closing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
