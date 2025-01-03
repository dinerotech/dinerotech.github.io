"use client";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import useViewModel from "./viewModel";
import React from "react";
import Link from "next/link";

export interface ViewProps {
  title: string;
  description: string;
  actionHref: string;
}

export default function View({ title, description, actionHref }: ViewProps) {
  const { onHide, isHidden } = useViewModel();
  const { locale } = React.useContext(LocaleContext);

  if (isHidden) return;

  return (
    <div className="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white">
        <Link href={actionHref}>
          <strong className="font-semibold">{title}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline size-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          {description}&nbsp;
          <span aria-hidden="true">
            {locale.direction === "ltr" ? "→" : "←"}{" "}
          </span>
        </Link>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={onHide}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="size-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
