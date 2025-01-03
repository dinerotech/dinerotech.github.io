import { LocalePto, LocaleResourcePto } from "@/domain/locale/ptos";
import { LOCALES, DEFAULT_LOCALE } from "@/domain/locale/constants";

export default function getLocale(localeIdentifier: string): LocalePto {
  return (
    LOCALES.find((value) => value.identifier == localeIdentifier) ||
    DEFAULT_LOCALE
  );
}

const resources: { [key: string]: () => Promise<LocaleResourcePto> } = {
  en: () => import("@/assets/locales/en.json").then((module) => module.default),
  ar: () => import("@/assets/locales/ar.json").then((module) => module.default)
};

export async function getLocaleResource(
  localeIdentifier: string
): Promise<LocaleResourcePto> {
  const locale = getLocale(localeIdentifier);
  return await resources[locale.identifier]();
}
