// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/* eslint-enable @typescript-eslint/no-var-requires */

// directories
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');
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
            // vendor
            require.resolve(
              path.resolve(
                NODE_MODULES_DIR,
                'react-responsive-carousel',
                'lib',
                'styles',
                'carousel.min.css'
              )
            ),
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
  tagline: 'Not just for DeFi',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/social_card.png',
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
            items: [
              {
                label: 'Features',
                to: '#features',
              },
              {
                label: 'Concepts',
                to: '#concepts',
              },
            ],
            label: 'Overview',
            position: 'right',
          },
          {
            label: 'Blog',
            position: 'right',
            to: '/blog',
          },
          {
            label: 'Docs',
            position: 'right',
            sidebarId: 'tutorialSidebar',
            type: 'docSidebar',
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
                label: 'Docs',
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
                href: 'https://twitter.com/kibisis_wallet',
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
