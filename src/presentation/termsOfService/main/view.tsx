"use client";

import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import FooterView from "@/presentation/home/footer/view";
import ContentsView from "@/presentation/termsOfService/contents/view";
import LocaleContext from "@/presentation/common/localeProvider/client/context";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <main id="home" className="bg-white">
      <BasicHeaderView title={t.home.termsOfService} />
      <ContentsView />
      <FooterView />
    </main>
  );
}
