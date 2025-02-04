"use client";
import React from "react";
import BannerView from "@/presentation/common/banner/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import SimpleHeaderView from "@/presentation/common/headers/simpleHeader/main/view";
import HeroView from "@/presentation/aboutUs/hero/main/view";
import ContainerView from "@/presentation/aboutUs/container/view";
import FooterView from "@/presentation/home/footer/view";
import CompanyView from "@/presentation/aboutUs/company/view";
import TimelineView from "@/presentation/aboutUs/timeline/main/view";
import TeamLetterView from "@/presentation/aboutUs/teamLetter/view";
import TeamView from "@/presentation/aboutUs/team/main/view";
import CTASectionView from "@/presentation/aboutUs/cta/view";

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
        <CompanyView />
        <TimelineView />
        <TeamLetterView img={null} />
        <TeamView />
        <div className="mt-24 w-full" />
        <CTASectionView />
      </ContainerView>
      <FooterView />
    </main>
  );
}
