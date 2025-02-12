import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import BlankImgPNG from "@/assets/pngs/blank_avatar.png";
import Image from "next/image";
import LogoSVG from "@/assets/svgs/logo03.svg";

export interface ViewProps {
  logo: string | StaticImport | null;
  avatar: string | StaticImport | null;
  author: string;
  company: string;
  message: string;
}

export default function View({
  logo,
  avatar,
  author,
  company,
  message
}: ViewProps) {
  return (
    <figure className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
      <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
        <p>&quot;{message}&quot;</p>
      </blockquote>
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
        <Image
          className="size-10 flex-none rounded-full bg-gray-50"
          src={avatar || BlankImgPNG}
          alt="avatar"
        />
        <div className="flex-auto">
          <div className="font-semibold">{author}</div>
          <div className="text-gray-600">{company}</div>
        </div>
        <Image
          className="h-10 w-auto flex-none"
          src={logo || LogoSVG}
          alt="logo"
        />
      </figcaption>
    </figure>
  );
}
