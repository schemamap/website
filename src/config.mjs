import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'schemamap.io',

  origin: 'https://schemamap.io',
  basePathname: '/',
  trailingSlash: false,

  title: 'schemamap.io — Tenant Onboarding for Postgres',
  description: 'schemamap.io handles your tenant onboarding end-to-end based on your database schema.',
  defaultImage,

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  microsoftClarityId: "gtgmt0rftj",
  mailerLiteId: "388243",

  blog: {
    disabled: true,
    postsPerPage: 3,

    post: {
      permalink: 'blog/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'blog/category', // Category main path /category/some-category
      noindex: true,
      disabled: true,
    },

    tag: {
      pathname: 'blog/tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: true,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
