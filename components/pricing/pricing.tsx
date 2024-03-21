import {
  Box,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ButtonLink,
  ButtonLinkProps,
} from "components/button-link/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Section, SectionProps, SectionTitle } from "components/section";
import React from "react";
import { FiCheck } from "react-icons/fi";

export interface PricingPlan {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  price: React.ReactNode;
  features: Array<PricingFeatureProps | null>;
  action: ButtonLinkProps & { label?: string };
  isRecommended?: boolean;
}

export interface PricingProps extends SectionProps {
  description: React.ReactNode;
  plans: Array<PricingPlan>;
}

export const PricingPlan = ({ plan }: { plan: PricingPlan }) => {
  return (
    <PricingBox
      key={plan.id}
      title={plan.title}
      description={plan.description}
      price={plan.price}
      sx={
        plan.isRecommended
          ? {
              borderColor: "primary.500",
              _dark: {
                borderColor: "primary.500",
                bg: "blackAlpha.300",
              },
            }
          : {}
      }
    >
      <PricingFeatures>
        {plan.features.map((feature, i) =>
          feature ? <PricingFeature key={i} {...feature} /> : <br key={i} />
        )}
      </PricingFeatures>
      <ButtonLink colorScheme="primary" {...plan.action}>
        {plan.action.label || "Sign Up"}
      </ButtonLink>
    </PricingBox>
  );
};

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props;

  const enterpriseId = "enterprise_plan";

  const plansExceptEnterprise = plans.filter(
    (plan) => plan.id !== enterpriseId
  );
  const enterprisePlan = plans.find((plan) => plan.id === enterpriseId);

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description}></SectionTitle>

        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {plansExceptEnterprise?.map((plan) => (
            <PricingPlan key={plan.id} plan={plan} />
          ))}
        </SimpleGrid>

        {enterprisePlan && (
          <Box mt={8}>
            <PricingPlan key={enterprisePlan.id} plan={enterprisePlan} />
          </Box>
        )}

        <Box mt={8}>
          <Heading as="h4" size="lg" mb="4">
            Pricing example
          </Heading>
          10K row product sheet + with 40 columns = ~1MB of data You can
          import/export that N times per plan (10, 1000, 10k)
        </Box>

        {children}
      </Box>
    </Section>
  );
};

const PricingFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="8"
      flex="1"
    >
      {children}
    </VStack>
  );
};

export interface PricingFeatureProps {
  title: React.ReactNode;
  iconColor?: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = (props) => {
  const { title, iconColor = "primary.500" } = props;
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  );
};

export interface PricingBoxProps extends Omit<StackProps, "title"> {
  title: React.ReactNode;
  description: React.ReactNode;
  price: React.ReactNode;
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, children, ...rest } = props;
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.600"
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor="gray.400"
      _dark={{
        bg: "blackAlpha.300",
        borderColor: "gray.800",
      }}
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        {title}
      </Heading>
      <Box color="muted">{description}</Box>
      <Box fontSize="2xl" fontWeight="bold" py="4">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  );
};
