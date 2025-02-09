import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import BlankOfficeIMG from "@/assets/pngs/blank_blog_img.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface ViewProps {
  imgOne: string | StaticImport | null;
  imgTwo: string | StaticImport | null;
  imgThree: string | StaticImport | null;
  imgFour: string | StaticImport | null;
}

export default function View({ imgOne, imgTwo, imgThree, imgFour }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-relaxed sm:leading-relaxed">
              {t.jobs.heroSection.title}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              {t.jobs.heroSection.subtitle}
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              {t.jobs.heroSection.description}
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto ltr:lg:ml-auto rtl:lg:mr-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={imgOne || BlankOfficeIMG}
                alt="office image 1"
                className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 ltr:lg:ml-auto rtl:lg:mr-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={imgTwo || BlankOfficeIMG}
                  alt="office image 2"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={imgThree || BlankOfficeIMG}
                  alt="office image 3"
                  className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={imgFour || BlankOfficeIMG}
                  alt=""
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
