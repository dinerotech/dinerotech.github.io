"use client";

import React from "react";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import ContainerView from "@/presentation/common/containers/formContainer/view";
import FormBlockContainerSectionView from "@/presentation/contactSales/sections/formBlockContainer/view";
import FormSectionView from "@/presentation/contactSales/sections/form/main/view";
import FormSideSectionView from "@/presentation/contactSales/sections/formSide/view";
import FooterView from "@/presentation/common/footer/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <main id="contact-sales" className="bg-white">
      <BasicHeaderView title={t.home.contactUs} />
      <ContainerView>
        <FormBlockContainerSectionView>
          <FormSectionView />
          <FormSideSectionView
            author="Yahya Al Moallim"
            position="IT Specialist"
            img={null}
          />
        </FormBlockContainerSectionView>
      </ContainerView>
      <FooterView />
    </main>
  );
}
