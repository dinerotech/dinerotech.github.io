import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import Image from "next/image";
import Item3PNG from "@/assets/pngs/product_item_3.png";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {t.home.productsSection.section3.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {t.home.productsSection.section3.description}
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 sm:px-10">
          <Image className="hw-full object-cover" src={Item3PNG} alt="" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
    </div>
  );
}
