"use client";

import React from "react";
import HeaderView from "@/presentation/privacyPolicy/header/view";
import FooterView from "@/presentation/home/footer/view";
import ContentsView from "@/presentation/privacyPolicy/contents/view";

export default function View() {
  return (
    <main id="home" className="bg-white">
      <HeaderView />
      <ContentsView />
      <FooterView />
    </main>
  );
}
