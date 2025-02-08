import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import ItemOneView from "@/presentation/home/sections/products/items/itemOne/view";
import ItemTwoView from "@/presentation/home/sections/products/items/itemThree/view";
import ItemThreeView from "@/presentation/home/sections/products/items/itemTwo/view";
import ItemFourView from "@/presentation/home/sections/products/items/itemFour/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-sky-600">
          {t.home.productsSection.tagline}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl leading-tight sm:leading-tight">
          {t.home.productsSection.title}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <ItemOneView />
          <ItemTwoView />
          <ItemThreeView />
          <ItemFourView />
        </div>
      </div>
    </div>
  );
}
