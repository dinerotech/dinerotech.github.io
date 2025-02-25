"use client";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import HeroView from "@/presentation/faqs/hero/view";
import QuestionsSectionView from "@/presentation/faqs/sections/questions/main/view";
import CTASectionView from "@/presentation/faqs/sections/cta/view";
import FooterView from "@/presentation/common/footer/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <main id="faqs" className="bg-white">
      <BasicHeaderView title={t.home.faqs} />
      <HeroView img={null} />
      <QuestionsSectionView />
      <CTASectionView />
      <FooterView />
    </main>
  );
}
