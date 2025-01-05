import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="relative max-lg:row-start-1">
      <div className="absolute inset-px rounded-lg bg-white"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {t.home.productsSection.section2.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {t.home.productsSection.section2.description}
          </p>
        </div>
        <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
          <img
            className="h-[min(152px,40cqw)] object-cover"
            src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
            alt=""
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
    </div>
  );
}
