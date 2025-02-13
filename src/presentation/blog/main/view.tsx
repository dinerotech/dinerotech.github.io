"use client";
import LocaleContext from "@/presentation/common/localeProvider/client/context";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import FooterView from "@/presentation/common/footer/view";
import PostListView from "@/presentation/blog/sections/postList/main/view";
import HeroView from "@/presentation/blog/hero/view";
import ContainerView from "@/presentation/common/containers/formContainer/view";

export default function View() {
  const { resource: t } = React.useContext(LocaleContext);
  return (
    <main id="jobs" className="bg-white">
      <BasicHeaderView title={t.home.blog} />

      <ContainerView>
        <HeroView />
        <PostListView />
      </ContainerView>
      <FooterView />
    </main>
  );
}
