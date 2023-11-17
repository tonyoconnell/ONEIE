import { defineConfig } from "astro/config";
import config from "./src/config/config.json";
import AutoImport from "astro-auto-import";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import swup from '@swup/astro';
import compress from "astro-compress";
import critters from "astro-critters";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: config.site.base_url ? config.site.base_url : "http://one.ie",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [react(), astroImageTools, sitemap(), swup({
    theme: 'slide',
    animationClass: 'transition-',
    containers: ['main'],
    cache: false,
    preload: true,
    accessibility: true,
    progress: true,
    routes: true,
    smoothScrolling: true,
    updateBodyClass: true,
    updateHead: true,
    reloadScripts: true,
    debug: true,
    loadOnIdle: true,
    globalInstance: false
  }), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), AutoImport({
    imports: ["@shortcodes/Button", "@shortcodes/Accordion", "@shortcodes/Notice", "@shortcodes/Video", "@shortcodes/Youtube", "@shortcodes/Blockquote", "@shortcodes/Badge", "@shortcodes/ContentBlock", "@shortcodes/Changelog"]
  }), mdx(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  output: "server",
  adapter: netlify()
});