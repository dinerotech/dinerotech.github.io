import React from "react";
import Link from "next/link";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import useViewModel from "./viewModel";
import SpinnerView from "@/presentation/common/spinner/view";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);
  const { loading, jobs } = useViewModel();

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 ltr:text-left rtl:text-right text-sm font-semibold text-gray-900 w-3/6"
                  >
                    {t.jobs.jobListSection.role}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 ltr:text-left rtl:text-right text-sm font-semibold text-gray-900"
                  >
                    {t.jobs.jobListSection.team}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 ltr:text-left rtl:text-right text-sm font-semibold text-gray-900"
                  >
                    {t.jobs.jobListSection.location}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 ltr:text-right rtl:text-left text-sm font-semibold text-gray-900"
                  >
                    {t.jobs.jobListSection.postedDate}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {loading && (
                  <tr className="even:bg-gray-50">
                    <td
                      className="whitespace-nowrap px-4 py-10 text-center text-sm text-gray-500 col-span-3"
                      colSpan={4}
                    >
                      <SpinnerView />
                    </td>
                  </tr>
                )}

                {!loading &&
                  jobs.map((item, index) => (
                    <tr key={index} className="even:bg-gray-50">
                      <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold">
                        <Link
                          href={`/${locale.identifier}/job/details?id=${item.jobId}`}
                          target="blank"
                          className="text-sky-600 hover:text-sky-900"
                        >
                          {item.role}
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                        {item.team}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                        {item.location}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 ltr:text-right rtl:text-left">
                        {item.postedDate}
                      </td>
                    </tr>
                  ))}
                {!loading && jobs.length < 1 && (
                  <tr className="even:bg-gray-50">
                    <td
                      className="whitespace-nowrap px-4 py-10 text-center text-sm text-gray-500 col-span-3"
                      colSpan={4}
                    >
                      {t.jobs.jobListSection.noVacancies}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
