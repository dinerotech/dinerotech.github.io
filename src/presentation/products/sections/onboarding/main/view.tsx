import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import SideView from "@/presentation/products/sections/onboarding/side/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div id="onboarding" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-sky-600">
                {t.products.onboardingSection.tagline}
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight sm:leading-tight">
                {t.products.onboardingSection.title}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {t.products.onboardingSection.description}
              </p>
            </div>
          </div>
          <SideView />
        </div>
      </div>
    </div>
  );
}
