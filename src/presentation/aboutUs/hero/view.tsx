import React from "react";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import Image from "next/image";
import BlankPNG from "@/assets/pngs/blank_blog_img.png";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-18 sm:pt-30 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {t.aboutUs.heroSection.title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
              {t.aboutUs.heroSection.subtitle}
            </p>
            {/* <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Live demo <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <Image
                  src={BlankPNG}
                  width="80"
                  height="52"
                  alt="team-1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />

                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <Image
                  src={BlankPNG}
                  width="80"
                  height="52"
                  alt="team-1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />

                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="relative">
                <Image
                  src={BlankPNG}
                  width="80"
                  height="52"
                  alt="team-1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />

                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <Image
                  src={BlankPNG}
                  width="80"
                  height="52"
                  alt="team-1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />

                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="relative">
                <Image
                  src={BlankPNG}
                  width="80"
                  height="52"
                  alt="team-1"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />

                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
