import { SITE_KEY } from "@/domain/recaptcha/constants";
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import FooterView from "@/presentation/common/footer/view";
import DetailsSectionView from "@/presentation/jobDetails/sections/details/view";
import FormSectionView from "@/presentation/jobDetails/sections/form/main/view";
import FormBlockContainerSectionView from "@/presentation/jobDetails/sections/formBlockContainer/view";
export interface ViewProps {
  jobId: string;
}

export default function View({ jobId }: ViewProps) {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <main id="job-details">
      <BasicHeaderView title={t.home.jobs} />
      <DetailsSectionView jobId={jobId} />
      <FormBlockContainerSectionView>
        <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
          <FormSectionView jobId={jobId} />
        </GoogleReCaptchaProvider>
      </FormBlockContainerSectionView>
      <FooterView />
    </main>
  );
}
