import React from "react";
import Image from "next/image";
import SolutionsPNG from "@/assets/pngs/solutions.png";

export default function View() {
  return (
    <div className="sm:px-6 lg:px-0">
      <div className="relative isolate overflow-hidden bg-sky-500 sm:mx-auto sm:max-w-2xl sm:rounded-3xl lg:mx-0 lg:max-w-none">
        <div
          className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
          <Image
            src={SolutionsPNG}
            alt="Product screenshot"
            width="1900"
            height="1400"
            className="-mb-12 w-[48rem] max-w-none rounded-tl-xl rtl:scale-x-[-1]"
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
