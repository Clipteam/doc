/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    'community',
    'development',
    {
      type: 'category',
      label: 'Features',
      link: { type: 'generated-index' },
      collapsed: true,
      items: [
        'features/custom-fps',
        'features/custom-reporter',
        'features/extension',
        'features/global-functions',
        'features/dark-mode',
        'features/print-text',
        'features/hqpen'
      ],
    },
    {
      type: 'category',
      label: 'For Developers',
      link: { type: 'generated-index' },
      collapsed: true,
      items: [
        'developer/get-started',
        'developer/basic',
        'developer/structure',
        'developer/load',
        'developer/block',
        'developer/i18n',
        'developer/interacting-with-editor',
        'developer/interacting-with-extension',
        'developer/settings'
      ],
    }
  ],
  api: [
    'api/type'
  ]
};

module.exports = sidebars;
