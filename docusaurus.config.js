// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClipCC Documentation',
  tagline: 'details of ClipCC\'s features and usage',
  url: 'https://doc.clipcc.cn',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Clipteam', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Clipteam/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'ClipCC',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://codingclip.com/offline',
            label: 'Download',
            position: 'right',
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
                label: 'Features',
                to: '/features/custom-fps',
              },
              {
                label: 'For developers',
                to: '/developer/at-first',
              }
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Clip Community',
                href: 'https://codingclip.com/',
              },
              {
                label: 'QQ',
                href: 'https://jq.qq.com/?_wv=1027&k=KDNmpxvN',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/ClipCChat',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Scratch',
                href: 'https://scratch.mit.edu/discuss/topic/557929/?page=19#post-6204055',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Clipteam/clipcc-gui',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Clipteam.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
