import React from "react";
import EventView from "@/presentation/aboutUs/sections/timeline/event/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="mx-auto mt-16 max-w-4xl px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base/7 font-semibold text-sky-600">
            {t.aboutUs.timelineSection.tagline}
          </p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t.aboutUs.timelineSection.title}
          </h2>
        </div>
        <div className="mt-16 flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          {t.aboutUs.timelineSection.events.map((item, index) => (
            <EventView
              key={index}
              side={index % 2 === 0 ? "left" : "right"}
              date={item.date}
              title={item.title}
              contents={item.contents}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
