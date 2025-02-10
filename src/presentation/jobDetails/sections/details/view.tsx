import React from "react";
import useViewModel from "./viewModel";
import SpinnerView from "@/presentation/common/spinner/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
export interface ViewProps {
  jobId: string;
}

export default function View({ jobId }: ViewProps) {
  const { loading, job } = useViewModel(jobId);
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <article className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        {loading && <SpinnerView />}
        {!loading && job && (
          <>
            {/* Job Posted Date */}
            <p className="text-base font-semibold text-sky-600">
              {job.postedDate}
            </p>

            {/* Job Title */}
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {job.role}
            </h1>

            {/* Additional Job Details */}
            <div className="mt-4 flex flex-wrap gap-4 text-gray-600 text-sm sm:text-base">
              <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                {job.team}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                {job.location}
              </span>
              {job.employmentType && (
                <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                  {job.employmentType}
                </span>
              )}
              <span
                className={`px-3 py-1 rounded-full font-medium ${
                  job.location.toLowerCase() === "remote"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {job.location.toLowerCase() === "remote"
                  ? `${t.jobDetails.contentsSection.remote}`
                  : `${t.jobDetails.contentsSection.onSite}`}
              </span>
            </div>

            {/* About Company Section */}
            <p className="mt-6 text-xl/8">
              {t.jobDetails.contentsSection.aboutCompany}
            </p>

            {/* Job Description */}
            <div className="mt-10 max-w-2xl">
              <p>{job.description}</p>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
