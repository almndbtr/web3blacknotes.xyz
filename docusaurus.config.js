// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🎹 Web3 Black Notes',
  tagline: 'Creating culture and space with the community.',
  url: 'https://www.web3blacknotes.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/the-black-notes.jpeg',
  organizationName: 'almndbtr',
  projectName: 'web3blacknotes.xyz',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/almndbtr/web3blacknotes.xyz/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/almndbtr/web3blacknotes.xyz/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Web3 Black Notes',
        logo: {
          alt: 'Web3 Black Notes Logo',
          src: 'img/the-black-notes.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About',
          },
          {
            to: '/blog',
            label: 'Show Notes',
            position: 'left'
          },
          {
            href: 'https://github.com/almndbtr/web3blacknotes.xyz',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Twitter',
            items: [
              {
                label: 'Kizzie 👩🏾‍🔬',
                href: 'https://twitter.com/PsalmOne',
              },
              {
                label: 'JamesGardin.eth. 🏆 #CityWideChamps 🎹 🧙‍♀️',
                href: 'https://twitter.com/jamesgardin_',
              },
              {
                label: 'patjunior.eth 🅴',
                href: 'https://twitter.com/iampatjunior',
              },
              {
                label: 'Almond 🎹',
                href: 'https://twitter.com/almndbtr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'About',
              //   to: '/docs/intro',
              // },
              // {
              //   label: 'Show Notes',
              //   to: '/blog',
              // },
              {
                label: 'License',
                href: 'https://github.com/almndbtr/web3blacknotes.xyz/blob/main/LICENSE.md',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/almndbtr/web3blacknotes.xyz',
              },
            ],
          },
        ],  
        copyright: 'No tracking. Have a nice day ☺'
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
