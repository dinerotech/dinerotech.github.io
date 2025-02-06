import React from "react";

export interface ViewProps {
  title: string;
  tagline: string;
}

export default function View({ title, tagline }: ViewProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">{tagline}</p>
    </div>
  );
}
