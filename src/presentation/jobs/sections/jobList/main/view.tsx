import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import JobListTableView from "@/presentation/jobs/sections/jobList/table/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div
      id="ceo-letter"
      className="overflow-hidden bg-slate-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 md:mb-10 text-center">
          <p className="text-base/7 font-semibold text-sky-600">
            {t.jobs.jobListSection.tagline}
          </p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight sm:leading-tight">
            {t.jobs.jobListSection.title}
          </h2>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <JobListTableView />
        </div>
      </div>
    </div>
  );
}
