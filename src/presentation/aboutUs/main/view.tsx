"use client";
import React from "react";
import BannerView from "@/presentation/common/banner/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import HeaderView from "@/presentation/aboutUs/header/main/view";
import HeroView from "@/presentation/aboutUs/hero/view";
import ContainerView from "@/presentation/aboutUs/container/view";

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
      <HeaderView />
      <ContainerView>
        <HeroView />
      </ContainerView>
    </main>
  );
}
