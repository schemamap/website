import {
  getPermalink,
  getBlogPermalink,
  getAsset,
  getHomePermalink,
} from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Services",
      href: getPermalink("/services"),
    },
    {
      text: "About",
      href: getPermalink("/about"),
    },

    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
    // {
    //   text: 'Docs',
    //   href: '/docs',
    // },
  ],
  actions: [
    // this is redirected via CloudFlare to Savvycal
    { type: "button", text: "Let's talk!", href: getPermalink("/meeting") },
  ],
};
export const githubOrgLink = "https://github.com/schemamap";
export const discordLink = "https://discord.com/invite/P3UzxNusbA";

export const footerData = {
  links: [
    {
      title: "Product",
      links: [
        { text: "Features", href: getHomePermalink() + "#features" },
        //{ text: 'Security', href: getPermalink('/security') },
        //{ text: 'Enterprise', href: getPermalink('/enterprise') },
        //{ text: 'Customer stories', href: getPermalink('/customer-stories') },
        //{ text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      title: "Support",
      links: [
        //{ text: 'Docs', href: getPermalink('/docs') },
        { text: "Community Forum", href: discordLink },
        // this is redirected via CloudFlare to UptimeRobot
        { text: "Status", href: getPermalink("/status") },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Services", href: getPermalink("/services") },
        { text: "About", href: getPermalink("/about") },
        // { text: 'Blog', href: getBlogPermalink() },
        // { text: 'Careers', href: '#' },
        // { text: 'Press', href: getPermalink('/press-kit') },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") },
    { text: "EULA", href: getPermalink("/eula") },
  ],
  socialLinks: [
    { ariaLabel: "Github", icon: "tabler:brand-github", href: githubOrgLink },
    { ariaLabel: "Discord", icon: "tabler:brand-discord", href: discordLink },
  ],
};
