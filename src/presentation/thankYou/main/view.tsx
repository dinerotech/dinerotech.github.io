"use client";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import ContentsSectionView from "@/presentation/thankYou/sections/contents/view";
import FooterView from "@/presentation/common/footer/view";
import ContainerView from "@/presentation/common/containers/formContainer/view";

export default function View() {
  return (
    <main id="thank-you">
      <BasicHeaderView title={""} />
      <ContainerView>
        <ContentsSectionView />
      </ContainerView>
      <FooterView />
    </main>
  );
}
