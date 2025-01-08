import React from "react";
import SideView from "@/presentation/products/sections/dashboard/side/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BlankAvatarPNG from "@/assets/pngs/blank_avatar.png";
import Image from "next/image";

export interface ViewProps {
  author: {
    name: string;
    title: string;
    avatar: string | StaticImport | null;
  };
}

export default function View({ author }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div id="dashboard" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-sky-600">
                {t.products.dashboardSection.tagline}
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {t.products.dashboardSection.title}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {t.products.dashboardSection.description}
              </p>

              <figure className="mt-8 border-l border-gray-200 pl-8 text-gray-600">
                <blockquote className="text-base/7">
                  <p>{t.products.dashboardSection.quote}</p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                  <Image
                    src={author.avatar || BlankAvatarPNG}
                    alt=""
                    className="size-6 flex-none rounded-full"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {author.name}
                    </span>{" "}
                    – {author.title}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <SideView />
        </div>
      </div>
    </div>
  );
}
