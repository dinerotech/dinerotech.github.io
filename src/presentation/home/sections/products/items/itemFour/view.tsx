import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] ltr:lg:rounded-r-[2rem] rtl:lg:rounded-l-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] ltr:lg:rounded-r-[calc(2rem+1px)] rtl:lg:rounded-l-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {t.home.productsSection.section4.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {t.home.productsSection.section4.description}
          </p>
        </div>
        <div className="relative min-h-[30rem] w-full grow">
          <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
              <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                  NotificationSetting.jsx
                </div>
                <div className="border-r border-gray-600/10 px-4 py-2">
                  App.jsx
                </div>
              </div>
            </div>
            <div className="px-6 pb-14 pt-6">
              {/* <!-- Your code example --> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] ltr:lg:rounded-r-[2rem] rtl:lg:rounded-l-[2rem]"></div>
    </div>
  );
}
