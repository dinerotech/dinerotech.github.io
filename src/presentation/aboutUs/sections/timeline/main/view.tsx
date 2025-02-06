import React from "react";
import EventView from "@/presentation/aboutUs/sections/timeline/event/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="mx-auto mt-16 max-w-4xl px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl text-white font-bold mb-12">Chronology</h2>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
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
