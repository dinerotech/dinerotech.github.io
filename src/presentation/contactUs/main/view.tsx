"use client";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import ContainerView from "@/presentation/common/containers/formContainer/view";
import HeroView from "@/presentation/common/heros/basic/view";
import FormSectionView from "@/presentation/contactUs/sections/form/main/view";
import OfficeSectionView from "@/presentation/contactUs/sections/offices/main/view";
import FooterView from "@/presentation/common/footer/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <main id="contact-us" className="">
      <BasicHeaderView title={t.home.contactUs} />
      <ContainerView>
        <HeroView
          title={t.contactUs.heroSection.title}
          tagline={t.contactUs.heroSection.tagline}
        />
        <FormSectionView />
      </ContainerView>
      <OfficeSectionView />
      <FooterView />
    </main>
  );
}
