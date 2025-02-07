import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);
  return (
    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.firstName}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              required={true}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.lastName}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              required={true}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.workEmail}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required={true}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="tel"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.workPhone}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="tel"
              id="tel"
              autoComplete="tel"
              pattern="^\+\d{1,3}\d{6,12}$"
              placeholder="+966501234567"
              required={true}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.company}
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="merchant"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.merchant}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="merchant_name"
              id="merchant"
              required={true}
              autoComplete="merchant"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="merchant"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.merchantLogo}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="file"
              name="merchant_logo"
              id="merchant_logo"
              required={true}
              accept="image/*"
              className="block w-full rounded-md bg-white px-3.5 py-1 text-base text-gray-900 border border-gray-500 file:mr-4 file:py-1.5 file:px-1 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 focus:border-sky-600 focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {t.joinUs.formSection.merchantLogoNote}
          </p>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.joinUs.formSection.message}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              required={true}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {t.joinUs.formSection.letsTalk}
        </button>
      </div>
      <p className="mt-4 text-sm/6 text-gray-500">
        {t.contactUs.formSection.bySubmittingThisFormIAgreeToThe}&nbsp;
        <a
          href={`/${locale.identifier}/privacy-policy`}
          className="font-semibold text-sky-600 lowercase"
        >
          {t.home.privacyPolicy}
        </a>
        .
      </p>
    </form>
  );
}
