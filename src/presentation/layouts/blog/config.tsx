import { NextraBlogTheme } from "nextra-theme-blog";

const config: NextraBlogTheme = {
  footer: <p>MIT 2023 © Nextra.</p>,
  head: ({ meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "Read More →",
  postFooter: undefined,
  darkMode: false,
  navs: [
    {
      url: "https://github.com/shuding/nextra",
      name: "Nextra"
    }
  ]
};

export default config;
