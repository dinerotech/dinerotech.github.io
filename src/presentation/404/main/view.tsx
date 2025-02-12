"use client";
import React from "react";
import BasicHeaderView from "@/presentation/common/headers/basicHeader/view";
import ContentsSectionView from "@/presentation/404/sections/contents/view";
import FooterView from "@/presentation/common/footer/view";
import ContainerView from "@/presentation/common/containers/formContainer/view";
import NotoKufiFont from "@/presentation/common/fonts";
import Head from "next/head";

export default function View() {
  return (
    <main id="not-found" className={`${NotoKufiFont.className} antialiased`}>
      <Head>
        <title>Not Found - 404</title>
      </Head>
      <BasicHeaderView title={""} />
        <ContentsSectionView />
      <FooterView />
    </main>
  );
}
