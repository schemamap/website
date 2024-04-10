import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import {
  ButtonLink,
  ButtonLinkProps,
} from "components/button-link/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Section, SectionProps, SectionTitle } from "components/section";
import { Br } from "components/typography";
import Link from "next/link";
import React from "react";
import { FiCheck, FiCopy, FiInfo } from "react-icons/fi";

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
              bg: "blackAlpha.300",
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

const pricingPlanSql = `
WITH table_sizes AS (
  SELECT
      table_schema || '.' || table_name as table_name,
      pg_total_relation_size((quote_ident(table_schema) || '.' ||
      quote_ident(table_name))::regclass) AS total_size_bytes,
      (pg_relation_size(
        (quote_ident(table_schema) || '.' || quote_ident(table_name))::regclass) / nullif(pg_class.reltuples, 0)) AS average_record_size_bytes,
      reltuples AS estimated_row_count
  FROM
      information_schema.tables
      JOIN pg_class ON
        pg_class.relname = information_schema.tables.table_name AND
        pg_class.relnamespace::regnamespace::text = information_schema.tables.table_schema AND
        pg_class.reltuples > 0
  WHERE
      table_type = 'BASE TABLE'
      AND table_schema NOT IN ('pg_catalog', 'information_schema', 'schemamap')
), human_table_stats AS (
SELECT
  table_name,
  total_size_bytes::numeric / (1024 * 1024) AS total_size_mb,
  average_record_size_bytes::numeric / (1024 * 1024) AS average_record_size_mb,
  estimated_row_count
FROM table_sizes
ORDER BY 2 DESC)

, schemamap_plans as (
SELECT *
FROM (VALUES ('Free', 10), ('Starter', 1024), ('Pro', 10240)) plans(plan_name, bandwidth_mb_included)
)

SELECT hts.*, sp.*, sp.bandwidth_mb_included::numeric / hts.total_size_mb as number_of_imports
FROM human_table_stats hts
CROSS JOIN schemamap_plans sp;
`;

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props;

  const enterpriseId = "enterprise_plan";

  const plansExceptEnterprise = plans.filter(
    (plan) => plan.id !== enterpriseId
  );
  const enterprisePlan = plans.find((plan) => plan.id === enterpriseId);

  const pricingSqlCopy = useClipboard(pricingPlanSql);

  const cardProps = {
    bg: "blackAlpha.300",
    mt: "4",
    alignItems: "stretch",
    borderRadius: "md",
    p: "4",
  } as const;

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

        <Box mt={16} textAlign={"center"}>
          <Heading as="h4" size="lg" mb="4">
            Pricing example
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={4}>
            <Card {...cardProps}>
              <CardBody>
                <Text>
                  A usual 10K line row Product table with 40 columns is about
                  ~1MB of data.
                </Text>
                <Text mt={4}>
                  This allows 10X, 1024X, 10240x imports of this data for the
                  Free, Starter and Pro plans respectively.
                </Text>
              </CardBody>
            </Card>
            <Card {...cardProps}>
              <CardBody>
                <Text>Want to know more with your own data?</Text>
                <Text mt={4}>
                  <Text
                    as={"span"}
                    onClick={pricingSqlCopy.onCopy}
                    textDecor={"underline"}
                    cursor={"pointer"}
                  >
                    Copy this SQL SELECT query
                    <IconButton
                      icon={pricingSqlCopy.hasCopied ? <FiCheck /> : <FiCopy />}
                      aria-label="Copy pricing plan estimate SQL query"
                      variant="ghost"
                      isRound
                      color="white"
                    />
                  </Text>{" "}
                  and run it on your database to get a feel for which plan is
                  right for you!
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
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
      bg="blackAlpha.300"
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor="gray.800"
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
