import React from "react";
import LargeCardView from "@/presentation/home/sections/testimonials/largeCard/view";
import SmallCardView from "@/presentation/home/sections/testimonials/smallCard/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-1313/771 w-[82.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        ></div>
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-1313/771 w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-sky-600">
            {t.home.testimonialsSection.title}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl leading-tight sm:leading-tight">
            {t.home.testimonialsSection.subTitle}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <LargeCardView
            logo={null}
            avatar={null}
            message={t.home.testimonialsSection.testimonials[0].message}
            author="Yahya Al Moallim"
            company="@dineropay"
          />
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-span-2">
              <SmallCardView
                avatar={null}
                message={t.home.testimonialsSection.testimonials[1].message}
                author={t.home.testimonialsSection.testimonials[1].author}
                company={t.home.testimonialsSection.testimonials[1].company}
              />

              {/* <!-- More testimonials... --> */}
            </div>
            <div className="space-y-8 xl:row-start-1">
              <SmallCardView
                avatar={null}
                message={t.home.testimonialsSection.testimonials[2].message}
                author={t.home.testimonialsSection.testimonials[2].author}
                company={t.home.testimonialsSection.testimonials[2].company}
              />
              {/* <!-- More testimonials... --> */}
            </div>
          </div>
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-start-1">
              <SmallCardView
                avatar={null}
                message={t.home.testimonialsSection.testimonials[3].message}
                author={t.home.testimonialsSection.testimonials[3].author}
                company={t.home.testimonialsSection.testimonials[3].company}
              />
              {/* <!-- More testimonials... --> */}
            </div>
            <div className="space-y-8 xl:row-span-2">
              <SmallCardView
                avatar={null}
                message={t.home.testimonialsSection.testimonials[4].message}
                author={t.home.testimonialsSection.testimonials[4].author}
                company={t.home.testimonialsSection.testimonials[4].company}
              />
              {/* <!-- More testimonials... --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
