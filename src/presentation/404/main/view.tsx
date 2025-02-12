"use client";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import ContentsSectionView from "@/presentation/404/sections/contents/view";
import FooterView from "@/presentation/common/footer/view";
import ContainerView from "@/presentation/common/containers/formContainer/view";

export default function View() {
  return (
    <main id="not-found">
      <BasicHeaderView title={""} />
      <ContainerView>
        <ContentsSectionView />
      </ContainerView>
      <FooterView />
    </main>
  );
}
