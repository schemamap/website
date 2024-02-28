import { HStack, Text, VStack } from "@chakra-ui/react";

export default {
  title: "Pricing for every stage",
  description: (
    <VStack>
      <Text>Use Schemamap.io free forever (with generous usage limits).</Text>
      <Text>
        Or pay by MB of Postgres master data transferred and get unrestricted
        access to everything.
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
          title: "10MB / month of Postgres data transfer",
        },
      ],
      action: {
        href: "https://app.schemamap.io/signup",
      },
    },
    {
      id: "bootstrap",
      title: "Bootstrap",
      description: "Complete frontend stack for bootstrappers and small teams.",
      price: "Free",
      isRecommended: true,
      features: [
        {
          title: "One project",
        },
        {
          title: "One developer",
        },
        {
          title: "Advanced components",
        },
        {
          title: "Multiple themes",
        },
        {
          title: "Next.js and Electron boilerplates",
        },
        {
          title: "Private discord community",
        },
        {
          title: "1 year of updates",
        },
        null,
        {
          title: "Private beta access",
          iconColor: "green.500",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license",
      },
    },
    {
      id: "startup",
      title: "Startup",
      description: "Unlimited license for growing teams.",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>€499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: "Unlimited projects",
        },
        {
          title: "Unlimited developers",
        },
        {
          title: "1 year of updates",
        },
        {
          title: "Everything from Bootstrap",
        },
        null,
        {
          title: "Private beta access",
          iconColor: "green.500",
        },
      ],
      action: {
        href: "https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license",
      },
    },
  ],
};
