import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "node:path";

const config: Config = {
  title: "Lorem ipsum",
  tagline: "",
  favicon: "#",

  // Set the production url of your site here
  url: "https://example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vecerek", // Usually your GitHub org/user name.
  projectName: "docusaurus-shiki-twoslash-example", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/vecerek/docusaurus-shiki-twoslash-example/tree/master/docs/",
          remarkPlugins: [
            [
              require("remark-shiki-twoslash").default,
              {
                themes: ["github-light", "github-dark"],
                defaultCompilerOptions: {
                  extends: [path.resolve(__dirname, "../tsconfig.json")],
                  paths: {
                    "@myorg/schema-extended": [
                      path.resolve(
                        __dirname,
                        "../packages/schema-extended/src"
                      ),
                    ],
                  },
                },
                tsModule: require("typescript"),
              },
            ],
            require("./plugins/remark-html-to-jsx"),
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
    [
      "docusaurus-preset-shiki-twoslash",
      {
        themes: ["min-light", "nord"],
        ignoreCodeblocksWithCodefenceMeta: ["live"],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Logo",
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "#",
          position: "right",
          className: "header-slack-link",
          "aria-label": "Slack channel",
        },
        {
          href: "https://github.com/vecerek/docusaurus-shiki-twoslash-example",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
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
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Effect Discord",
              href: "https://discord.gg/effect-ts",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/vecerek/docusaurus-shiki-twoslash-example",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
