"use client";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import ContainerView from "@/presentation/common/containers/formContainer/view";
import HeroView from "@/presentation/common/heros/basic/view";
import FormSectionView from "@/presentation/joinUs/sections/form/main/view";
import FooterView from "@/presentation/common/footer/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <main id="contact-us" className="">
      <BasicHeaderView title={t.home.joinUs} />
      <ContainerView>
        <HeroView
          title={t.joinUs.heroSection.title}
          tagline={t.joinUs.heroSection.tagline}
        />
        <FormSectionView />
      </ContainerView>
      <FooterView />
    </main>
  );
}
