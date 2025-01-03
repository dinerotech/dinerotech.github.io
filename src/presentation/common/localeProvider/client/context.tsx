"use client";
import React from "react";
import { LocalePto, LocaleResourcePto } from "@/domain/locale/ptos";
import { DEFAULT_LOCALE } from "@/domain/locale/constants";
import EnResource from "@/assets/locales/en.json";

export interface LocaleContextProps {
  locale: LocalePto;
  resource: LocaleResourcePto;
}

export const defaultLocaleContext: LocaleContextProps = {
  locale: DEFAULT_LOCALE,
  resource: EnResource
};

const LocaleContext =
  React.createContext<LocaleContextProps>(defaultLocaleContext);

export default LocaleContext;
