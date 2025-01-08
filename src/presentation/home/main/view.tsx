"use client";

import React from "react";
import HeroView from "@/presentation/home/hero/main/view";
import ContainerView from "@/presentation/home/container/view";
import BannerView from "@/presentation/common/banner/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import HeaderView from "@/presentation/home/header/main/view";
import LogoCloudView from "@/presentation/home/logoCloud/main/view";
import SolutionsSectionView from "@/presentation/home/sections/solutions/main/view";
import ProductsSectionView from "@/presentation/home/sections/products/main/view";
import StatsSectionView from "@/presentation/home/sections/stats/view";
import BlogSectionView from "@/presentation/home/sections/blog/main/view";
import CTASectionView from "@/presentation/home/sections/cta/view";
import FooterView from "@/presentation/home/footer/view";

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
        <HeaderView />
        <HeroView />
        <LogoCloudView />
      </ContainerView>
      <SolutionsSectionView />
      <ProductsSectionView />
      <StatsSectionView />
      <BlogSectionView />
      <CTASectionView />
      <FooterView />
    </main>
  );
}
