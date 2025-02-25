"use client";

import React from "react";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import ContainerView from "@/presentation/common/containers/formContainer/view";
import FormBlockContainerSectionView from "@/presentation/contactSales/sections/formBlockContainer/view";
import FormSectionView from "@/presentation/contactSales/sections/form/main/view";
import FormSideSectionView from "@/presentation/contactSales/sections/formSide/view";
import FooterView from "@/presentation/common/footer/view";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { SITE_KEY } from "@/domain/recaptcha/constants";
export default function View() {
  const { resource: t } = React.useContext(LocaleContext);

  return (
    <main id="contact-sales" className="bg-white">
      <BasicHeaderView title={t.home.contactSales} />
      <ContainerView>
        <FormBlockContainerSectionView>
          <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
            <FormSectionView />
          </GoogleReCaptchaProvider>
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
