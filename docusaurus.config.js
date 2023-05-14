// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: ["./src/components/chatbot"],
  scripts: [
    {
      src: "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1",
      async: true,
    },
  ],

  title: "Easy Create Chatbots",
  tagline: "Chatbots Library",
  url: "https://chasire.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Mizar", // Usually your GitHub org/user name.
  projectName: "Chasire", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        label: "English",
      },
      es: {
        label: "Espanol",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/Mizar-Contasti/Chasire",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: "https://github.com/Mizar-Contasti/Chartress",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Chasire",
        logo: {
          alt: "Chasire",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          // },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "chatbots",
            position: "left",
            label: "Chatbots built with Chasire",
          },

          {
            href: "https://github.com/Mizar-Contasti",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/Mizar-Contasti/Chasire.php",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chasire. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php"],
      },
    }),
};

module.exports = config;
