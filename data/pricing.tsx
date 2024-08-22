import { HStack, Tag, Text, VStack } from "@chakra-ui/react";
import siteConfig from "./config";

export default {
  title: "Pricing for every business",
  description: (
    <VStack>
      <Text>Use Schemamap.io free forever (with generous usage limits).</Text>
      <Text>Pay only for the Postgres bandwidth used, per MB.</Text>
      <Text>
        All prices include a{" "}
        <Tag colorScheme="green" size={"lg"}>
          -50% early adopter discount
        </Tag>
        , upgrade while it lasts!
      </Text>
    </VStack>
  ),
  plans: [
    {
      id: "free",
      title: "Free Plan",
      description:
        "Enough to get started and scale up, best for indie founders.",
      price: "Free",
      features: [
        {
          title: "10MB / month of Postgres bandwidth",
        },
        {
          title: "No flexible bandwidth usage",
        },
        {
          title: "EU data residency",
        },
        {
          title: "1 tracked tenant",
        },
        {
          title: "3 users",
        },
        {
          title: "Slack integration",
        },
        {
          title: "Best-effort support",
        },
      ],
      action: {
        href: "https://accounts.schemamap.io/sign-up?selected_plan=free",
      },
    },
    {
      id: "starter_annual",
      title: "Starter Plan",
      description: "Best for companies close to PMF.",
      price: <Text>€600/year</Text>,
      features: [
        { title: "Everything in Free, plus:" },

        {
          title: "1GB / month of Postgres bandwidth",
        },
        {
          title: "Flexible usage pricing: €0.05 / MB",
        },
        {
          title: "3 tracked tenants",
        },
        {
          title: "10 users",
        },
        {
          title: "3-day email support",
        },
        {
          title: "Schema Overview dashboard",
        },
        {
          title: "Tenant Onboarding dashboard",
        },
      ],
      action: {
        href: "https://accounts.schemamap.io/sign-up?selected_plan=starter_annual",
        label: "Sign up then upgrade",
      },
    },
    {
      id: "pro_annual",
      title: "Pro Plan",
      description: "For companies that are expanding rapidly.",
      isRecommended: true,
      price: (
        <HStack>
          <Text>€1200/year</Text>
          <Tag display={["none", null, null, "inherit"]} colorScheme="green">
            Best value
          </Tag>
        </HStack>
      ),
      features: [
        {
          title: "Everything in Starter, plus:",
        },
        {
          title: "10GB / month of Postgres bandwidth",
        },
        {
          title: "Flexible usage pricing: €0.04 / MB",
        },
        {
          title: "100 tracked tenants",
        },
        {
          title: "100 users",
        },
        {
          title: "Priority support",
        },
        {
          title: "Success Engineer",
          iconColor: "green.500",
        },
      ],
      action: {
        href: "https://accounts.schemamap.io/sign-up?selected_plan=pro_annual",
        label: "Sign up then upgrade",
      },
    },
    {
      id: "enterprise_plan",
      title: "Enterprise Plan",
      description: "Custom license for large companies with unique needs.",
      price: "Custom",
      features: [
        { title: "Everything in Pro, plus:" },
        { title: "Custom/unlimited bandwidth pricing", iconColor: "green.500" },
        {
          title: "On-premise hosting & cloud deployment",
          iconColor: "green.500",
        },
        { title: "SLAs", iconColor: "green.500" },
        { title: "Dedicated support & training", iconColor: "green.500" },
        { title: "White-labeling" },
        { title: "Custom components" },
        { title: "Onboarding optimization consulting" },
      ],
      action: {
        label: "Talk to the founder",
        href: siteConfig.meetingUrl,
      },
    },
  ],
};
