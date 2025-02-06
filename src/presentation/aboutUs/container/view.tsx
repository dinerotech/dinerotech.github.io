import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export type ViewProps = Readonly<{
  children: React.ReactNode;
}>;

export default function View({ children }: ViewProps) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div>
      <div className="relative isolate">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute rtl:left-1/2 ltr:right-1/2 rtl:right-0 ltr:left-0 top-0 -z-10 rtl:-ml-24 ltr:-mr-24 transform-gpu overflow-hidden blur-3xl rtl:lg:ml-24 rtl:xl:ml-48 ltr:lg:mr-24 ltr:xl:mr-48"
          aria-hidden="true"
        >
          {locale.direction === "rtl" && (
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
              }}
            ></div>
          )}
          {locale.direction === "ltr" && (
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
    </div>
  );
}
