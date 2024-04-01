import { Button } from "@chakra-ui/react";
import { Br, Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import {
  FiCheck,
  FiSmile,
  FiSliders,
  FiGrid,
  FiThumbsUp,
  FiTable,
  FiUsers,
} from "react-icons/fi";
import { Logo } from "./logo";
import { FeatureProps } from "components/features";

const siteConfig = {
  logo: Logo,
  meetingUrl: "https://savvycal.com/schemamap/talk",
  seo: {
    title: "Schemamap.io",
    description: "Tenant Onboarding for Postgres",
  } as NextSeoProps,
  termsUrl: "/terms",
  privacyUrl: "/privacy",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      /*
      {
        id: "faq",
        label: "FAQ",
      },
      */
      {
        label: "Login",
        href: "https://app.schemamap.io/login",
      },
      {
        label: "Sign Up",
        href: "https://app.schemamap.io/signup",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © 2023-{new Date().getFullYear()} Schemamap.io Kft.{" "}
        <Br display={{ base: "initial", md: "none" }} />
        All rights reserved
      </>
    ),
    links: [
      { href: "/about", label: "About" },
      {
        href: "/privacy",
        label: "Privacy Policy",
      },
      {
        href: "/terms",
        label: "Terms of Service",
      },
      {
        href: "/eula",
        label: "EULA",
      },
      {
        href: "mailto:krisz@schemamap.io",
        label: "Contact",
      },
      {
        href: "https://stats.uptimerobot.com/ZELp9fP5Xn/",
        label: "Status",
      },
      {
        href: "https://github.com/schemamap/schemamap",
        label: <FaGithub size="20" />,
      },
    ],
  },
  signup: {
    title: "Create a new Schemamap.io account",
    features: [
      {
        title: "Spreadsheet management",
        icon: FiTable,
        description:
          "Stop building CSV and Excel imports by hand. Allow your customers to import their data collaboratively for any table in your web app.",
        iconPosition: "left",
        delay: 0.4,
      },
      {
        title: "Tenant Onboarding",
        icon: FiUsers,
        description:
          "Track the onboarding progress of your tenants, see where people get stuck. Get notified on Slack when data is ready for import.",
        iconPosition: "left",
        delay: 0.5,
      },
      {
        title: "Postgres-native",
        icon: FiGrid,
        description:
          "Integrate Schemamap.io with any cloud Postgres provider (Supabase, Hasura, AWS RDS, GCP, Azure). No special extensions needed.",
        iconPosition: "left",
        delay: 0.6,
      },
      {
        title: "Always up-to-date",
        icon: FiThumbsUp,
        description:
          "By tracking how the underlying tables & their constraints change, your spreadsheets stay automatically in sync. Trivially backfill data.",
        iconPosition: "left",
        delay: 0.7,
      },
    ] as FeatureProps[],
  },
};

export default siteConfig;
