"use client";
import React from "react";
import BannerView from "@/presentation/common/banner/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import SimpleHeaderView from "@/presentation/common/headers/simpleHeader/main/view";
import HeroView from "@/presentation/aboutUs/hero/main/view";
import ContainerView from "@/presentation/aboutUs/container/view";
import FooterView from "@/presentation/common/footer/view";
import CompanySectionView from "@/presentation/aboutUs/sections/company/view";
import TimelineSectionView from "@/presentation/aboutUs/sections/timeline/main/view";
import TeamLetterSectionView from "@/presentation/aboutUs/sections/teamLetter/view";
import TeamSectionView from "@/presentation/aboutUs/sections/team/main/view";
import CTASectionView from "@/presentation/aboutUs/sections/cta/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <main id="about-us" className="bg-white">
      <BannerView
        enabled={true}
        title={t.home.banner.title}
        description={t.home.banner.description}
        actionHref="#"
      />
      <SimpleHeaderView title={t.home.aboutUs} theme="light" />
      <ContainerView>
        <HeroView />
        <CompanySectionView />
        <TimelineSectionView />
        <TeamLetterSectionView img={null} />
        <TeamSectionView />
        <CTASectionView />
      </ContainerView>
      <FooterView />
    </main>
  );
}
