import Head from "next/head";
import { useRouter } from "next/router";
import { useMounted } from "nextra/hooks";

const notFoundText: Record<string, string> = {
  en: "This page could not be found",
  ar: "Эта страница не может быть найдена"
};

export default function View() {
  const { asPath } = useRouter();
  const mounted = useMounted();
  const lang = asPath.split("/", 2)[1];
  const text = `404 - ${notFoundText[mounted ? lang : "en"]}`;

  return (
    <h1 className="h-dvh flex items-center justify-center text-4xl font-bold">
      <Head>
        <title>{text}</title>
      </Head>
      {text}
    </h1>
  );
}
