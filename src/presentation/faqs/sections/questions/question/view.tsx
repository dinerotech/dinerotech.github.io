"use client";
import React from "react";
import useViewModel from "./viewModel";

export interface ViewProps {
  question: string;
  answer: string;
}

export default function View({ question, answer }: ViewProps) {
  const { collapsed, onToggleVisibility } = useViewModel();

  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <dt>
        <button
          type="button"
          onClick={onToggleVisibility}
          className="flex w-full items-start justify-between ltr:text-left rtl:text-right text-gray-900"
          aria-controls="faq-0"
          aria-expanded={!collapsed}
        >
          <span className="text-base/7 font-semibold">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            {!!collapsed && (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
            {!collapsed && (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            )}
          </span>
        </button>
      </dt>
      {!collapsed && (
        <dd className="mt-2 ltr:pr-12 rtl:pl-12" id="faq-0">
          <p className="text-base/7 text-gray-600">{answer}</p>
        </dd>
      )}
    </div>
  );
}
