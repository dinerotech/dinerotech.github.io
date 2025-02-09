"use client";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import HeroView from "@/presentation/jobs/hero/view";
import JobListView from "@/presentation/jobs/sections/jobList/main/view";
import FooterView from "@/presentation/common/footer/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <main id="jobs" className="bg-white">
      <BasicHeaderView title={t.home.jobs} />
      <HeroView imgOne={null} imgTwo={null} imgThree={null} imgFour={null} />
      <JobListView />
      <FooterView />
    </main>
  );
}
