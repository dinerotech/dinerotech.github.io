import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import BlankAvatarPNG from "@/assets/pngs/blank_avatar.png";
import { formatDate, formatDateTime } from "@/domain/dates/utils";
import BlankBlogImgPNG from "@/assets/pngs/blank_blog_img.png";

export interface ViewProps {
  date: Date;
  category: "marketing" | "developers" | "management";
  title: string;
  summary: string;
  author: {
    name: string;
    title: string;
    avatar: string | StaticImport | null;
  };
  url: string | null;
  img: string | StaticImport | null;
}

export default function View({
  title,
  summary,
  category,
  date,
  author,
  url,
  img
}: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <Image
          src={img || BlankBlogImgPNG}
          alt=""
          className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={formatDateTime(date)} className="text-gray-500">
            {formatDate(date)}
          </time>
          <a
            href={url || "#"}
            target="_blank"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {
              t.home.blogSection.categories[
                category as keyof typeof t.home.blogSection.categories
              ]
            }
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{summary}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={author.avatar || BlankAvatarPNG}
            alt=""
            className="size-10 rounded-full bg-gray-100"
          />
          <div className="text-sm/6">
            <p className="font-semibold text-gray-900">
              {/* <a href="#"> */}
              <span className="absolute inset-0"></span>
              {author.name}
              {/* </a> */}
            </p>
            <p className="text-gray-600">{author.title}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
