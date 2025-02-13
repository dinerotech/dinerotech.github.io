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
  date,
  category,
  title,
  summary,
  author,
  url,
  img
}: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          src={img || BlankBlogImgPNG}
          alt="cover-image"
          className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={formatDateTime(date)} className="text-gray-500">
            {formatDate(date)}
          </time>
          <a
            href={url || "#"}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {
              t.home.blogSection.categories[
                category as keyof typeof t.home.blogSection.categories
              ]
            }
          </a>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-5 text-sm/6 text-gray-600">{summary}</p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <Image
              src={author.avatar || BlankAvatarPNG}
              alt="avatar"
              className="size-10 rounded-full bg-gray-50"
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
      </div>
    </article>
  );
}
