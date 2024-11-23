import { LocalePto } from "./ptos";

export const LOCALES: LocalePto[] = [
  {
    identifier: "en",
    name: "English",
    direction: "ltr"
  },
  {
    identifier: "ar",
    name: "العربية",
    direction: "rtl"
  }
];

export const LOCALE_IDENS: string[] = LOCALES.map((item) => item.identifier);

export const DEFAULT_LOCALE: LocalePto = LOCALES[0];

export const DEFAULT_LOCALE_IDEN = LOCALES[0].identifier;
