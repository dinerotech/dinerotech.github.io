import React from "react";
import Image from "next/image";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import BlankImgPNG from "@/assets/pngs/blank_avatar.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LogoSVG from "@/assets/svgs/logo03.svg";

export interface ViewProps {
  author: string;
  position: string;
  img: string | StaticImport | null;
}

export default function View({ img, author, position }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="lg:mt-6 lg:w-80 lg:flex-none">
      <Image className="h-12 w-auto" src={LogoSVG} alt="logo" />
      <figure className="mt-10">
        <blockquote className="text-lg/8 font-semibold text-gray-900">
          <p>“{t.contactSales.formSideSection.message}”</p>
        </blockquote>
        <figcaption className="mt-10 flex gap-x-6">
          <Image
            src={img || BlankImgPNG}
            alt="avatar"
            className="size-12 flex-none rounded-full bg-gray-50"
          />
          <div>
            <div className="text-base font-semibold text-gray-900">
              {author}
            </div>
            <div className="text-sm/6 text-gray-600">{position}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
