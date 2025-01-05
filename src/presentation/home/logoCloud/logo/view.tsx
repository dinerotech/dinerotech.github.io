import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
import BlankImgPNG from "@/assets/pngs/blank_logo.png";

export interface ViewProps {
  img: string | StaticImport | null;
}

export default function View({ img }: ViewProps) {
  return (
    <Image
      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
      src={img || BlankImgPNG}
      alt="Transistor"
      width="158"
      height="48"
    />
  );
}
