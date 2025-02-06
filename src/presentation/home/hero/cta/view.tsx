import React from "react";
import Image from "next/image";
import Link from "next/link";
import CaretRightSVG from "@/assets/svgs/caret_right_gray.svg";
import CaretLeftSVG from "@/assets/svgs/caret_left_gray.svg";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export interface ViewProps {
  title: string;
  description: string;
  href: string | null;
}

export default function View({ title, description, href }: ViewProps) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className="flex">
      <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <span className="font-semibold text-sky-600">{title}</span>
        <span className="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
        <Link href={href || "#"} className="flex items-center gap-x-1">
          <span className="absolute inset-0" aria-hidden="true"></span>
          {description}
          <Image
            src={locale.direction === "ltr" ? CaretRightSVG : CaretLeftSVG}
            alt="caret"
            className="ltr:-mr-2 rtl:-ml-2 h-3 w-3"
          />
        </Link>
      </div>
    </div>
  );
}
