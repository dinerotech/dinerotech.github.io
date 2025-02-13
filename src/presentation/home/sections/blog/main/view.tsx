import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import PostView from "@/presentation/home/sections/blog/post/view";
import SpinnerView from "@/presentation/common/spinner/view";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base/7 font-semibold text-sky-600">
            {t.home.blogSection.tagline}
          </p>
          <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight sm:leading-tight">
            {t.home.blogSection.title}
          </h2>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl items-center justify-center">
          <a
            href={`/${locale.identifier}/products`}
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            {t.home.blogSection.cta} &nbsp;
            <span aria-hidden="true">
              {locale.direction === "ltr" ? "→" : "←"}{" "}
            </span>
          </a>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <SpinnerView />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <PostView
            title="Boost your conversion rate"
            summary="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
            category="marketing"
            date={new Date()}
            url={null}
            img={null}
            author={{
              name: "Yahya Moallim",
              title: "Software Engineer",
              avatar: null
            }}
          />
          <PostView
            title="Boost your conversion rate"
            summary="Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta."
            category="marketing"
            date={new Date()}
            url={null}
            img={null}
            author={{
              name: "Yahya Moallim",
              title: "Software Engineer",
              avatar: null
            }}
          />
          {/* <!-- More posts... --> */}
        </div>
      </div>
    </div>
  );
}
