import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    // this is redirected via CloudFlare to Savvycal
    { type: 'button', text: "Let's talk", href: getPermalink('/meeting') }
  ],
};
export const githubOrgLink = 'https://github.com/schemamap';
export const discordLink = 'https://discord.com/invite/P3UzxNusbA';

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/features') },
        { text: 'Security', href: getPermalink('/security') },
        { text: 'Enterprise', href: getPermalink('/enterprise') },
        { text: 'Customer stories', href: getPermalink('/customer-stories') },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: getPermalink('/docs') },
        { text: 'Community Forum', href: discordLink },
        { text: 'Professional Services', href: getPermalink('/professional-services') },
        { text: 'Status', href: getPermalink('/status') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        // { text: 'Careers', href: '#' },
        { text: 'Press', href: getPermalink('/press-kit') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: githubOrgLink },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: discordLink }
  ],
};