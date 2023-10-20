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
            require.resolve(path.resolve(STYLES_DIR, 'global.css')),
            require.resolve(path.resolve(STYLES_DIR, 'navbar.css')),
          ],
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
      image: 'images/docusaurus-social-card.jpg', // TODO: change social card
      navbar: {
        logo: {
          alt: 'Kibisis Site Logo',
          src: 'images/logo.svg',
          srcDark: 'images/logo-dark.svg',
        },
        items: [
          // left
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            label: 'Blog',
            position: 'left',
            to: '/blog',
          },

          // right
          {
            href: GITHUB_LINK,
            position: 'right',
            className: 'header__icon--github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
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
