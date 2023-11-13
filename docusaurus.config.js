// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/* eslint-enable @typescript-eslint/no-var-requires */

// directories
const SOURCE_DIR = path.resolve(__dirname, 'src');
const STATIC_DIR = path.resolve(__dirname, 'static');
const STYLES_DIR = path.resolve(SOURCE_DIR, 'styles');

// links
const GITHUB_LINK = 'https://github.com/agoralabs-sh/kibisis-web-extension';

// application
const TITLE = 'Kibisis';

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  favicon: 'images/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  organizationName: 'agoralabs-sh ',
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve(path.resolve(STYLES_DIR, 'global.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'mixins.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'navbar.scss')),
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  projectName: 'kibisis-website',
  staticDirectories: [STATIC_DIR],
  tagline: 'The AVM utility wallet',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/kibisis_social-card.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'algorand, algosdk, blockchain, browser, chrome, cryptocurrency, firefox, opera, wallet',
        },
      ],
      navbar: {
        logo: {
          alt: 'Kibisis Site Logo',
          src: 'images/logo.svg',
          srcDark: 'images/logo-dark.svg',
        },
        items: [
          // right
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Learn',
          },
          {
            label: 'Blog',
            position: 'right',
            to: '/blog',
          },
        ],
        title: TITLE,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn More',
            items: [
              {
                label: 'Learn',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Get Involved',
            items: [
              {
                label: 'GitHub',
                href: GITHUB_LINK,
              },
            ],
          },
        ],
        copyright: `Developed with ❤️ by Agora Labs. Licensed under <a href="${GITHUB_LINK}/blob/main/LICENSE" target="_blank">GPL-2.0</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  title: TITLE,
  trailingSlash: false,
  url: 'https://kibis.is',
};

module.exports = config;
