import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import BlankImgPNG from "@/assets/pngs/blank_blog_img.png";

export interface ViewProps {
  img: string | StaticImport | null;
}

export default function View({ img }: ViewProps) {
  return (
    <Image
      src={img || BlankImgPNG}
      width="80"
      height="52"
      alt="team-1"
      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    />
  );
}
