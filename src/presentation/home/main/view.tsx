"use client";
import React from "react";
import HeroView from "@/presentation/home/hero/main/view";
import ContainerView from "@/presentation/home/container/view";
import BannerView from "@/presentation/home/banner/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import HeaderView from "@/presentation/home/header/main/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <main id="home" className="bg-white">
      <BannerView
        title={t.home.greatNews}
        description={t.home.tabbySupported}
        actionHref="#"
      />
      <ContainerView>
        <HeaderView />
        <HeroView />
      </ContainerView>
    </main>
  );
}
