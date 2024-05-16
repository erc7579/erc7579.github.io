import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>ERC-7579</span>,
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – ERC-7579",
      };
    } else {
      return {
        titleTemplate: "ERC-7579",
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ERC-7579" />
      <meta
        property="og:description"
        content="Minimal Modular Smart Accounts"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  project: {
    link: "https://github.com/erc7579",
  },
  chat: {
    link: "https://twitter.com/erc7579",
    icon: <FaXTwitter size={24} style={{ marginLeft: "-10px" }} />,
  },
  docsRepositoryBase: "https://github.com/erc7579/erc7579.github.io/tree/main",
  footer: {
    text: "ERC-7579 Docs",
  },
  banner: {
    key: "initial-release",
    text: (
      <a href="https://eips.ethereum.org/EIPS/eip-7579" target="_blank">
        Check out the ERC proposal →
      </a>
    ),
  },
  faviconGlyph: "📝",
};

export default config;
