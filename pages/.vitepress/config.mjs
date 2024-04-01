import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICLSH-8",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Organization", link: "/organization" },
      { text: "Papers", link: "/papers" },
      { text: "Sessions", link: "/sessions" },
      { text: "Registration", link: "/registration" },
      { text: "Sponsorship", link: "/sponsorship" },
      { text: "Guide", link: "/guide" },
      { text: "Contact", link: "/contact" },
    ],
    search: {
      provider: "local",
    },
    aside: "left",
  },
});
