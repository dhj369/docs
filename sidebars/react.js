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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  typescript: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },
    {
      type: "doc",
      label: "ThirdwebProvider",
      id: "react.thirdwebprovider",
    },
    {
      type: "category",
      label: "General Hooks",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "useAddress",
          id: "react.useaddress",
        },
        {
          type: "doc",
          label: "useChainId",
          id: "react.usechainid",
        },
        {
          type: "doc",
          label: "useMetamask",
          id: "react.usemetamask",
        },
        {
          type: "doc",
          label: "useWalletConnect",
          id: "react.usewalletconnect",
        },
        {
          type: "doc",
          label: "useCoinbaseWallet",
          id: "react.usecoinbasewallet",
        },
        {
          type: "doc",
          label: "useConnect",
          id: "react.useconnect",
        },
        {
          type: "doc",
          label: "useDisconnect",
          id: "react.usedisconnect",
        },
        {
          type: "doc",
          label: "useNetwork",
          id: "react.usenetwork",
        },
      ],
    },
    {
      type: "category",
      label: "SDK Hooks",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "useEdition",
          id: "react.useedition",
        },
        {
          type: "doc",
          label: "useEditionDrop",
          id: "react.useeditiondrop",
        },
        {
          type: "doc",
          label: "useMarketplace",
          id: "react.usemarketplace",
        },
        {
          type: "doc",
          label: "useNFTCollection",
          id: "react.usenftcollection",
        },
        {
          type: "doc",
          label: "useNFTDrop",
          id: "react.usenftdrop",
        },
        {
          type: "doc",
          label: "usePack",
          id: "react.usepackmodule",
        },
        {
          type: "doc",
          label: "useToken",
          id: "react.usetoken",
        },
        {
          type: "doc",
          label: "useVote",
          id: "react.usevote",
        },
      ],
    },
    {
      type: "doc",
      id: "react",
      label: "Full Reference",
    },
  ],
};

module.exports = sidebars;
