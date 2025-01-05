import React from "react";

export default function View() {
  return (
    <div className="sm:px-6 lg:px-0">
      <div className="relative isolate overflow-hidden bg-sky-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
        <div
          className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
          <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
              <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                  NotificationSetting.jsx
                </div>
                <div className="border-r border-gray-600/10 px-4 py-2">
                  App.jsx
                </div>
              </div>
            </div>
            <div className="px-6 pb-14 pt-6">
              {/* <!-- Your code example --> */}
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
