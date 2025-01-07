import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import Image from "next/image";
import Item3PNG from "@/assets/pngs/product_item_1.png";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white ltr:lg:rounded-l-[2rem] rtl:lg:rounded-r-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ltr:lg:rounded-l-[calc(2rem+1px)] rtl:lg:rounded-r-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {t.home.productsSection.section1.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {t.home.productsSection.section1.description}
          </p>
        </div>
        <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-black bg-black shadow-2xl">
            <Image
              className="size-full object-cover object-top"
              src={Item3PNG}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 ltr:lg:rounded-l-[2rem] rtl:lg:rounded-r-[2rem]"></div>
    </div>
  );
}
