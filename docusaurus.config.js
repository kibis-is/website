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
const AGORA_LABS_LINK = 'https://agoralabs.sh';
const GITHUB_LINK = 'https://github.com/agoralabs-sh/kibisis-web-extension';
const KIBISIS_LINK = 'https://kibis.is';
const REPORT_A_BUG_LINK =
  'https://github.com/agoralabs-sh/kibisis-web-extension/issues/new?assignees=kieranroneill&labels=%F0%9F%90%9B+bug&projects=&template=bug_report_template.yml&title=%5BBug%5D%3A+';
const SUGGEST_A_FEATURE_LINK =
  'https://github.com/agoralabs-sh/kibisis-web-extension/issues/new?assignees=&labels=%E2%9C%A8+feature&projects=&template=feature_request_template.yml&title=%5BFeature%5D%3A+';
const X_LINK = 'https://x.com/kibisis_wallet';

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
            'algorand, algosdk, blockchain, browser, chrome, cryptocurrency, edge, firefox, opera, voi, wallet',
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
                to: '/#features',
              },
              {
                label: 'Concepts',
                to: '/#concepts',
              },
              {
                label: 'Download',
                to: '/#download',
              },
            ],
            label: 'Overview',
            position: 'right',
          },
          // {
          //   label: 'Blog',
          //   position: 'right',
          //   to: '/blog',
          // },
          // {
          //   label: 'Docs',
          //   position: 'right',
          //   sidebarId: 'docsSidebar',
          //   type: 'docSidebar',
          // },
        ],
        title: TITLE,
      },
      footer: {
        copyright: `Licensed under <a href="${GITHUB_LINK}/blob/main/LICENSE" target="_blank">GPL-2.0</a>.`,
        logo: {
          alt: 'Agora Labs logo',
          height: '50px',
          href: AGORA_LABS_LINK,
          src: '/images/developed_by_agora_labs_banner.svg',
          target: '_blank',
        },
        links: [
          {
            title: TITLE,
            items: [
              {
                label: 'Concepts',
                to: '/#concepts',
              },
              {
                label: 'Features',
                to: '/#features',
              },
              {
                label: 'Download',
                to: '/#download',
              },
            ],
          },
          // {
          //   title: 'Learn More',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //   ],
          // },
          {
            title: 'Social',
            items: [
              {
                label: 'X, formerly Twitter',
                href: X_LINK,
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
              {
                label: 'Report a bug',
                href: REPORT_A_BUG_LINK,
              },
              {
                label: 'Suggest a feature',
                href: SUGGEST_A_FEATURE_LINK,
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                to: '/privacy-policy',
              },
            ],
          },
        ],
        style: 'dark',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  title: TITLE,
  trailingSlash: false,
  url: KIBISIS_LINK,
};

module.exports = config;
