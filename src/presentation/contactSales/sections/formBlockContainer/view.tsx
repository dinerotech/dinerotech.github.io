import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export type ViewProps = Readonly<{
  children: React.ReactNode;
}>;

export default function View({ children }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div className="mx-auto max-w-xl lg:max-w-4xl">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        {t.contactSales.formBlockContainerSection.title}
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">
        {t.contactSales.formBlockContainerSection.description}
      </p>
      <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        {children}
      </div>
    </div>
  );
}
