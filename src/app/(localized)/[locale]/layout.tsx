import type { Metadata } from "next";
import "@/assets/css/globals.css";
import { LOCALES } from "@/domain/locale/constants";
import NotoKufiFont from "@/presentation/common/fonts";
import getLocale, { getLocaleResource } from "@/domain/locale/utils";
import LocaleProvider from "@/presentation/common/localeProvider/client/view";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png"
  }
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale: locale.identifier }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeIdentifier } = await params;
  //
  const locale = getLocale(localeIdentifier);
  const localeResource = await getLocaleResource(localeIdentifier);
  const { title, description } = localeResource;

  return (
    <html
      className="scroll-smooth"
      lang={locale.identifier}
      dir={locale.direction}
    >
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className={`${NotoKufiFont.className} antialiased`}>
        <LocaleProvider locale={locale} resource={localeResource}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
