import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import Image from "next/image";
import OpenCartSVG from "@/assets/svgs/opencart.svg";
import PrestaShopSVG from "@/assets/svgs/prestashop.svg";
import WooCommerceSVG from "@/assets/svgs/woocommerce.svg";
import MagentoSVG from "@/assets/svgs/magento.svg";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="bg-sky-200/25">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-sky-900">
          {t.products.pluginsSection.title}{" "}
        </h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="-ml-8 -mt-4 flex flex-wrap justify-between lg:-ml-4">
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image className="h-20 w-auto" src={OpenCartSVG} alt="opencart" />
            </div>
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image className="h-20 w-auto" src={MagentoSVG} alt="magento" />
            </div>
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image
                className="h-20 w-auto"
                src={WooCommerceSVG}
                alt="woocommerce"
              />
            </div>
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image
                className="h-20 w-auto"
                src={PrestaShopSVG}
                alt="prestashop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
