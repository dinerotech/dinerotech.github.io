import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import BlankImgPNG from "@/assets/pngs/blank_avatar.png";
import Image from "next/image";

export interface ViewProps {
  author: string;
  company: string;
  message: string;
  avatar: string | StaticImport | null;
}

export default function View({ avatar, author, company, message }: ViewProps) {
  return (
    <figure className="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5">
      <blockquote className="text-gray-900">
        <p>“{message}”</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <Image
          className="size-10 rounded-full bg-gray-50"
          src={avatar || BlankImgPNG}
          alt="avatar"
        />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-gray-600">{company}</div>
        </div>
      </figcaption>
    </figure>
  );
}
