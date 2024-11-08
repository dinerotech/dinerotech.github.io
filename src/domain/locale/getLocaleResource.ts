import LocaleResourcePto from "@/domain/locale/localeResource";

import Locale from "@/domain/locale/constants";
const resources: { [key: string]: () => Promise<LocaleResourcePto> } = {
  en: () => import("@/assets/locales/en.json").then((module) => module.default),
  ar: () => import("@/assets/locales/ar.json").then((module) => module.default)
};

export default async function getLocaleResource(
  locale: Locale
): Promise<LocaleResourcePto> {
  return await resources[locale]();
}
