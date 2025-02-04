import React from "react";
import MemberView from "@/presentation/aboutUs/team/member/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            {t.aboutUs.teamSection.title}
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            {t.aboutUs.teamSection.description}
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <MemberView img={null} name="test" position="test" />
          <MemberView img={null} name="test" position="test" />
          <MemberView img={null} name="test" position="test" />
          <MemberView img={null} name="test" position="test" />
        </ul>
      </div>
    </div>
  );
}
