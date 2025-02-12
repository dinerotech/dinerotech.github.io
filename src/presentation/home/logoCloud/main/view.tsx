import React from "react";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import LogoView from "@/presentation/home/logoCloud/logo/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <div className="py-12 sm:py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          {t.home.trustedByTeams}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <LogoView img={null} />
          <LogoView img={null} />
          <LogoView img={null} />
          <LogoView img={null} />
          <LogoView img={null} />
        </div>
      </div>
    </div>
  );
}
