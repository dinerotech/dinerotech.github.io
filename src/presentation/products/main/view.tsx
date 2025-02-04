"use client";
import React from "react";
import HeroView from "@/presentation/products/hero/view";
import ContainerView from "@/presentation/products/container/view";
import BannerView from "@/presentation/common/banner/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import SimpleHeaderView from "@/presentation/common/headers/simpleHeader/main/view";
import FooterView from "@/presentation/home/footer/view";
import PaymentSectionView from "@/presentation/products/sections/payments/view";
import OnboardingSectionView from "@/presentation/products/sections/onboarding/main/view";
import DashboardSectionView from "@/presentation/products/sections/dashboard/main/view";
import PlatformSectionView from "@/presentation/products/sections/platform/view";
import PluginsSectionView from "@/presentation/products/sections/plugins/view";
import CTASectionView from "@/presentation/products/sections/cta/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <main id="home" className="bg-white">
      <BannerView
        enabled={true}
        title={t.home.banner.title}
        description={t.home.banner.description}
        actionHref="#"
      />
      <ContainerView>
        <SimpleHeaderView title={t.home.products} theme="dark" />
        <HeroView />
      </ContainerView>
      <PaymentSectionView />
      <OnboardingSectionView />
      <DashboardSectionView
        author={{
          name: "Yahya Moallim",
          title: "Product Manager",
          avatar: null
        }}
      />
      <PlatformSectionView />
      <PluginsSectionView />
      <CTASectionView />
      <FooterView />
    </main>
  );
}
