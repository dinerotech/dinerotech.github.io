import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);

  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] ltr:lg:rounded-r-[2rem] rtl:lg:rounded-l-[2rem]"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] ltr:lg:rounded-r-[calc(2rem+1px)] rtl:lg:rounded-l-[calc(2rem+1px)]">
        <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {t.home.productsSection.section4.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {t.home.productsSection.section4.description}
          </p>
          <div className="mt-4 flex items-center gap-x-6">
            <a
              href={`${locale.identifier}/docs`}
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {t.home.productsSection.section4.cta} &nbsp;
              <span aria-hidden="true">
                {locale.direction === "ltr" ? "→" : "←"}{" "}
              </span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[30rem] w-full grow">
          <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
            <div className="flex bg-gray-800/40 ring-1 ring-white/5" dir="ltr">
              <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                  app.js
                </div>
                <div className="border-r border-gray-600/10 px-4 py-2">
                  example.js
                </div>
              </div>
            </div>
            <div className="px-6 pb-14 pt-6">
              <pre
                className="text-[0.8125rem]/6 text-gray-300"
                dir="ltr"
                style={{ tabSize: 2 }}
              >
                <code>
                  <span style={{ color: "#569CD6" }}>import</span>{" "}
                  <span style={{ color: "#9CDCFE" }}>dineropay</span>{" "}
                  <span style={{ color: "#D4D4D4" }}>from</span>{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;dineropay&quot;
                  </span>
                  ;
                  <br />
                  <br />
                  <span style={{ color: "#569CD6" }}>const</span>{" "}
                  <span style={{ color: "#9CDCFE" }}>payment</span>{" "}
                  <span style={{ color: "#D4D4D4" }}>=</span>{" "}
                  <span style={{ color: "#569CD6" }}>new</span>{" "}
                  <span style={{ color: "#9CDCFE" }}>dineropay</span>
                  <span style={{ color: "#D4D4D4" }}>&#40;</span>
                  <br />
                  <span style={{ color: "#D4D4D4" }}>
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span style={{ color: "#9CDCFE" }}>redirectUrl</span>
                  <span style={{ color: "#D4D4D4" }}>:</span>{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;https://callbackurl.com&quot;
                  </span>
                  <span style={{ color: "#D4D4D4" }}>,</span>
                  <br />
                  <span style={{ color: "#D4D4D4" }}>
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span style={{ color: "#9CDCFE" }}>apiKey</span>
                  <span style={{ color: "#D4D4D4" }}>:</span>{" "}
                  <span style={{ color: "#CE9178" }}>&quot;API_KEY&quot;</span>
                  <span style={{ color: "#D4D4D4" }}>,</span>
                  <br />
                  <span style={{ color: "#D4D4D4" }}>
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span style={{ color: "#9CDCFE" }}>failureUrl</span>
                  <span style={{ color: "#D4D4D4" }}>:</span>{" "}
                  <span style={{ color: "#CE9178" }}>
                    &quot;https://failureurl.com&quot;
                  </span>
                  <br />
                  <span style={{ color: "#D4D4D4" }}>&#41;</span>
                  <span style={{ color: "#D4D4D4" }}>;</span>
                  <br />
                  <br />
                  <span style={{ color: "#569CD6" }}>const</span>{" "}
                  <span style={{ color: "#9CDCFE" }}>paymentUrl</span>{" "}
                  <span style={{ color: "#D4D4D4" }}>=</span>{" "}
                  <span style={{ color: "#9CDCFE" }}>payment</span>
                  <span style={{ color: "#D4D4D4" }}>.</span>
                  <span style={{ color: "#DCDCAA" }}>create</span>
                  <span style={{ color: "#D4D4D4" }}>&#40;</span>
                  <br />
                  <span style={{ color: "#D4D4D4" }}>
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span style={{ color: "#9CDCFE" }}>amount</span>
                  <span style={{ color: "#D4D4D4" }}>:</span>{" "}
                  <span style={{ color: "#B5CEA8" }}>20</span>
                  <br />
                  <span style={{ color: "#D4D4D4" }}>&#41;</span>
                  <span style={{ color: "#D4D4D4" }}>;</span>
                  <br />
                  <br />
                  <span style={{ color: "#569CD6" }}>return</span>{" "}
                  <span style={{ color: "#9CDCFE" }}>paymentUrl</span>
                  <span style={{ color: "#D4D4D4" }}>;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] ltr:lg:rounded-r-[2rem] rtl:lg:rounded-l-[2rem]"></div>
    </div>
  );
}
