import React from "react";
import Image from "next/image";
import ProjectOnboardingPNG from "@/assets/pngs/onboarding.png";

export default function View() {
  return (
    <div className="sm:px-6 lg:px-0">
      <div className="relative isolate overflow-hidden bg-sky-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
        <div
          className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
          <Image
            src={ProjectOnboardingPNG}
            alt="Product onboarding"
            width="2432"
            height="1442"
            className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
