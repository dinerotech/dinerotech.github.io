import React from "react";

export interface ViewProps {
  value: string;
  title: string;
  description: string;
}

export default function View({ value, title, description }: ViewProps) {
  return (
    <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6">
      <div className="flex gap-5">
        <div className="font-manrope text-2xl font-bold text-sky-600">
          {value}
        </div>
        <div className="flex-1">
          <h4 className="text-xl text-gray-900 font-semibold mb-2  tracking-tight">
            {title}
          </h4>
          <p className="text-lg/8 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
