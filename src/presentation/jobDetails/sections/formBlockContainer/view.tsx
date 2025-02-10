import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export type ViewProps = Readonly<{
  children: React.ReactNode;
}>;

export default function View({ children }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div className="bg-slate-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            {t.jobDetails.formBlockContainerSection.title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            {t.jobDetails.formBlockContainerSection.tagline}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
