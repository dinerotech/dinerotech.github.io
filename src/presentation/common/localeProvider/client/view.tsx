"use client";

import React from "react";
import { LocalePto, LocaleResourcePto } from "@/domain/locale/ptos";
import LocaleContext from "./context";

interface ViewProps {
  locale: LocalePto;
  resource: LocaleResourcePto;
  children: React.ReactNode;
}

export default function View({ locale, resource, children }: ViewProps) {
  return (
    <LocaleContext.Provider value={{ locale: locale, resource: resource }}>
      {children}
    </LocaleContext.Provider>
  );
}
