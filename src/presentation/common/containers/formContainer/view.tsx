import React from "react";
import LocaleContext from "../../localeProvider/client/context";
export type ViewProps = Readonly<{
  children: React.ReactNode;
}>;

export default function View({ children }: ViewProps) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute ltr:left-1/2 rtl:right-1/2 ltr:right-0 rtl:left-0 top-0 -z-10 ltr:-ml-24 rtl:-mr-24 transform-gpu overflow-hidden blur-3xl ltr:lg:ml-24 ltr:xl:ml-48 rtl:lg:mr-24 rtl:xl:mr-48"
        aria-hidden="true"
      >
        {locale.direction === "ltr" && (
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
            }}
          ></div>
        )}
        {locale.direction === "rtl" && (
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tl from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(36.9% 29.5%, 0% 17.1%, 23.4% 3%, 51.6% 0%, 55.4% 4.7%, 45.5% 25.3%, 40.2% 49%, 44.8% 57.8%, 55.6% 57.2%, 72.2% 47.9%, 64.9% 81.5%, 100% 97.7%, 60.8% 100%, 64.8% 81.4%, 2.8% 52.8%, 36.9% 29.5%)"
            }}
          ></div>
        )}
      </div>
      {children}
    </div>
  );
}
