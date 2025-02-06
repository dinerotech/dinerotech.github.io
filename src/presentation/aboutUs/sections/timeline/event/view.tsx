import React from "react";

export interface ViewProps {
  side: "left" | "right";
  date: string;
  title: string;
  contents: string;
}

export default function View({ side, date, title, contents }: ViewProps) {
  if (side === "left")
    return (
      <div className="flex md:contents flex-row-reverse">
        <div className="relative p-4 my-6 mt-0 pt-0 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
          <time
            dateTime="2021-08"
            className="flex items-center text-sm/6 font-semibold text-sky-600"
          >
            {date}
          </time>
          <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="mt-1 text-base/7 text-gray-600">{contents}</p>
        </div>
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-2 h-full">
            <div className="w-0.5 h-full bg-gray-800/10 rounded-t-full"></div>
          </div>
          <div className="absolute w-2 h-2 -mt-3 bg-white border-4 border-sky-400 rounded-full top-0"></div>
        </div>
      </div>
    );

  if (side === "right") {
    return (
      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
          <div className="flex items-center justify-center w-2 h-full">
            <div className="w-0.5 h-full bg-gray-800/10 rounded-t-full"></div>
          </div>
          <div className="absolute w-2 h-2 -mt-3 bg-white border-4 border-sky-400 rounded-full top-0"></div>
        </div>
        <div className="relative p-4 my-6 mt-0 pt-0 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
          <time
            dateTime="2021-08"
            className="flex items-center text-sm/6 font-semibold text-sky-600"
          >
            {date}
          </time>
          <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="mt-1 text-base/7 text-gray-600">{contents}</p>
        </div>
      </div>
    );
  }
}
