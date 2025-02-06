import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import BlankImgPNG from "@/assets/pngs/blank_avatar.png";

export interface ViewProps {
  img: string | StaticImport | null;
  name: string;
  position: string;
}

export default function View({ img, name, position }: ViewProps) {
  return (
    <li>
      <div className="flex items-center gap-x-6">
        <Image
          className="size-16 rounded-full"
          src={img || BlankImgPNG}
          alt="avatar"
        />
        <div>
          <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
            {name}
          </h3>
          <p className="text-sm/6 font-semibold text-sky-600">{position}</p>
        </div>
      </div>
    </li>
  );
}
