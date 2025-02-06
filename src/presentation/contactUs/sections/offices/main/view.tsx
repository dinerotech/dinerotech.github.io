import React from "react";
import OfficeView from "@/presentation/contactUs/sections/offices/office/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {t.contactUs.officesSection.title}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            {t.contactUs.officesSection.description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {t.contactUs.officesSection.offices.map((item, index) => (
            <OfficeView
              key={index}
              city={item.city}
              AddressLineOne={item.addressLineOne}
              AddressLineTwo={item.addressLineTwo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
