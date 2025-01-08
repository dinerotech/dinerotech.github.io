import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import STCPAYPNG from "@/assets/pngs/stcpay.png";
import APPLEPAYPNG from "@/assets/pngs/applepay.png";
import MADAPNG from "@/assets/pngs/mada.png";
import TABBYPNG from "@/assets/pngs/tabby.png";
import TAMARAPNG from "@/assets/pngs/tamra.png";
import VISAPNG from "@/assets/pngs/visa.png";
import MASTERCARDPNG from "@/assets/pngs/mastercard.png";
import Image from "next/image";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div id="payment-methods" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {t.products.paymentsSection.title}
        </h2>
        <p className="text-center mt-6 text-lg/8 text-gray-300">
          {t.products.paymentsSection.description}
        </p>

        <div className="mx-auto mt-10 flex flex-wrap max-w-lg justify-center items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
          <Image
            className="max-h-24 w-auto object-contain"
            src={MADAPNG}
            alt="mada"
          />
          <Image
            className="max-h-24 w-auto object-contain"
            src={STCPAYPNG}
            alt="stcpay"
          />
          <Image
            className="max-h-24 w-auto object-contain"
            src={VISAPNG}
            alt="visa"
          />
          <Image
            className="max-h-24 w-auto object-contain"
            src={MASTERCARDPNG}
            alt="mastercard"
          />
          <Image
            className="max-h-24 w-auto object-contain"
            src={APPLEPAYPNG}
            alt="applepay"
          />
          <Image
            className="max-h-24 w-auto object-contain"
            src={TABBYPNG}
            alt="applepay"
          />
          <Image
            className="max-h-24 w-auto object-contain"
            src={TAMARAPNG}
            alt="applepay"
          />
        </div>
      </div>
    </div>
  );
}
