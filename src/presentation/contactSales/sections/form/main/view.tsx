import { SALES_REQUEST_TYPES } from "@/domain/sales/constants";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useViewModel from "./viewModel";

export default function View() {
  const { locale, resource: t } = React.useContext(LocaleContext);
  const { handleCaptchaChange, siteKey } = useViewModel();

  return (
    <form action="#" method="POST" className="lg:flex-auto">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.contactSales.formSection.firstName}{" "}
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
            {t.contactSales.formSection.lastName}{" "}
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
            {t.contactSales.formSection.workEmail}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
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
            {t.contactSales.formSection.workPhone}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="text"
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
            htmlFor="website"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.contactSales.formSection.website}
          </label>
          <div className="mt-2.5">
            <input
              type="url"
              name="website"
              id="website"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="request-type"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.contactSales.formSection.requestType}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <select
              name="request-type"
              id="request-type"
              required={true}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-600 sm:text-sm/6"
              defaultValue={SALES_REQUEST_TYPES[1].value}
            >
              {SALES_REQUEST_TYPES.map((item, index) => (
                <option key={index} value={item.value}>
                  {
                    t.contactSales.formSection.requestTypes[
                      item.identifier as keyof typeof t.contactSales.formSection.requestTypes
                    ] as string
                  }
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            {t.contactSales.formSection.message}{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              required={true}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="sm:col-span-2 flex justify-center mt-10">
        <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {t.contactSales.formSection.letsTalk}
        </button>
      </div>
      <p className="mt-4 text-sm/6 text-gray-500">
        {t.contactSales.formSection.bySubmittingThisFormIAgreeToThe}&nbsp;
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
