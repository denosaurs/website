module.exports = {
  title: "Denosaurs",
  tagline: "deno.land module wizards",
  url: "https://denosaurs.land/website",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "denosaurs",
  projectName: "website",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Denosaurs",
      logo: {
        alt: "Denosaurs logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/denon/home",
          label: "Denon",
          position: "left",
        },
        {
          to: "docs/webview/home",
          label: "Webview",
          position: "left",
        },
        {
          label: "Other modules",
          position: "left",
          items: [
            {
              label: "📑 DDoc",
              to: "docs/ddoc/home",
            },
            {
              label: "🔌 Plug",
              to: "docs/plug/home",
            },
            {
              label: "🥌 Cache",
              to: "docs/cache/home",
            },
            {
              label: "🗿 Status",
              to: "docs/status/home",
            },
            {
              label: "🗜 Brotli",
              to: "docs/brotli/home",
            },
            {
              label: "🗜 Lz4",
              to: "docs/lz4/home",
            },
            {
              label: "🍣 Wasabi",
              to: "docs/wasabi/home",
            },
            {
              label: "👷🏽‍♂️ Parry",
              to: "docs/parry/home",
            },
            {
              label: "➗ Algebra",
              to: "docs/algebra/home",
            },
          ],
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/denosaurs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "Denon",
              to: "docs/denon/home",
            },
            {
              label: "Plug",
              to: "docs/plug/home",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/aw3ZYaC",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/denosaurs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/denosaurs/denosaurs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} the denosaurs team.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "nope",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/denosaurs/website/edit/master/website/",
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/website/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
