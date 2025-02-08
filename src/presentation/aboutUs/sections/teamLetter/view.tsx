import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import Image from "next/image";
import BlankImgPNG from "@/assets/pngs/blank_blog_img.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ViewProps {
  img: string | StaticImport | null;
}

export default function View({ img }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div id="ceo-letter" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 md:mb-10 text-center">
          <p className="text-base/7 font-semibold text-sky-600">
            {t.aboutUs.teamLetterSection.tagline}
          </p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight sm:leading-tight">
            {t.aboutUs.teamLetterSection.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-8">
          <div className="flex flex-col items-center justify-center rounded-lg p-4 lg:p-8">
            <Image
              src={img || BlankImgPNG}
              alt="avatar"
              className="aspect-[12/15] w-full rounded-2xl object-cover mb-2"
            />
          </div>

          <div className="flex flex-col rounded-lg sm:p-8 p-4">
            <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
              {t.aboutUs.teamLetterSection.name}
            </div>
            <div className="text-sm font-semibold sm:text-base mb-6 mt-2">
              {t.aboutUs.teamLetterSection.position}
            </div>

            <p className="text-lg text-pretty tracking-tight text-gray-600 ltr:sm:mr-8 rtl:sm:ml-8 mb-12 mt-8">
              {t.aboutUs.teamLetterSection.contents}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
