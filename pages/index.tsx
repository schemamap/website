import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  Link as ChakraLink,
  VStack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCheckCircle,
  FiCheckSquare,
  FiCode,
  FiCopy,
  FiCrosshair,
  FiDatabase,
  FiFlag,
  FiGrid,
  FiLock,
  FiRefreshCcw,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import siteConfig from "data/config";
import { FaBrain, FaGlobeEurope, FaSignLanguage } from "react-icons/fa";
import { useConsent } from "components/consent";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Schemamap.io - Tenant Onboarding for Postgres"
        description="Schemamap.io handles your multi-tenant SaaS onboarding, inferred from your Postgres database schema."
      />
      <Box>
        <HeroSection />

        {/* <HighlightsSection /> */}

        <FeaturesSection />

        {/* <TestimonialsSection /> */}

        <PricingSection />

        {/* <FaqSection /> */}

        <QuestionsSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container
        maxW="container.xl"
        pt={{ base: 10, lg: 40 }}
        pb={{ base: 0, lg: 10 }}
      >
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            zIndex={1000}
            title={
              <FallInPlace>
                Spreadsheet imports solved once and for all
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Reduce onboarding time and avoid errors with Google Sheets
                automatically generated from your multi-tenant Postgres
                database.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" mt={10}>
                <ButtonLink
                  variant="primary"
                  size="lg"
                  href="https://app.schemamap.io/signup?utm_content=hero-cta&utm_source=schemamap.io"
                  height={12}
                  data-attr="signup"
                >
                  Get started for free
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href={siteConfig.meetlingUrl}
                  variant="outline"
                  data-attr="demo"
                  height={12}
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Get a demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            maxH="600px"
            position={{ base: "initial", lg: "absolute" }}
            display={"block"}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
            zIndex={1000}
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/google_sheet.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of the Google Sheet editor in Schemamap.io"
                  quality="100"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={6}
        innerWidth="container.xl"
        pt={20}
        features={siteConfig.signup.features}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      innerWidth={"container.xl"}
      title={
        <Heading lineHeight="tall" fontSize={"2xl"} textAlign="left" as="div">
          Everything you need to reduce your tenants activation time and to
          reduce churn.
        </Heading>
      }
      description={
        <>
          Free up precious developer time by using your database schema as a
          knowledge base for your onboarding.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Repeatable imports.",
          icon: FiRefreshCcw,
          description:
            "Spreadsheet imports have been historically one-and-done processes. Schemamap.io allows reruns and amendments, by handling the import process for you.",
        },
        {
          title: "Automatic data validation.",
          icon: FiCheckSquare,
          description:
            "All of your Postgres unique and check constraints get turned into their Google Sheet equivalent formulas and maintained as they change. Users get early feedback, before even importing.",
        },
        {
          title: "(De-)normalization.",
          icon: FaBrain,
          description: (
            <Text as={"span"}>
              Existing tools only work for single tables. Schemamap.io uses the{" "}
              <Link href="https://turborepo.com" isExternal>
                PostgreSQL analyzer
              </Link>{" "}
              to turn any SELECT with JOINs into an equivalent INSERT CTE.
            </Text>
          ),
        },
        {
          title: "SQL-defined interfaces.",
          icon: FiDatabase,
          description:
            "Define how your multi-tenancy is implemented along with master data views in SQL via your regular database migrations. As close to the truth as it gets.",
        },
        {
          title: "Secure by default.",
          icon: FiLock,
          description:
            "Schemamap.io uses the least amount of database resources and permissions for each stage of your adoption. No fear of data leaks and your DBA stays in control.",
        },

        {
          title: "In-memory transforms.",
          icon: FiTrendingUp,
          description:
            "Schemamap.io never stores your data. It transfers it from and to your database in a heavily sandboxed environment, with tens of GBs of RAM readily available. So you don't have to.",
        },
        {
          title: "Postgres-only.",
          icon: FiCheckCircle,
          description:
            "Instead of building a generic solution, we are fully committed to building the best way to move tabular data in and out of Postgres. This allows us to provide the most secure and performant solution.",
        },
        {
          title: "Schema analysis & diffing.",
          icon: FiSearch,
          description:
            "Track your database schema along with constraints across environments (Local/Staging/Prod) and see how it evolves. Easily spot any differences.",
        },
        {
          title: "Localization support.",
          icon: FaGlobeEurope,
          description: (
            <Text as="span">
              Schemamap.io supports your application locales (en_US, de_DE,
              fr_FR, ...). Provide your I18n as JSON, get tenant language
              specific columns/comments/dropdowns automatically, same as your
              frontend.
            </Text>
          ),
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location and business type.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

const QuestionsSection = () => {
  const { consent, setConsent } = useConsent();
  return (
    <Box>
      <Container maxW="container.xl" pb="40">
        <Stack spacing="6">
          <Heading as="h2" fontSize="4xl" textAlign="center">
            Any questions?
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Talk to the{" "}
            <ChakraLink href="https://www.linkedin.com/in/kriszszabo/">
              founder directly.
            </ChakraLink>{" "}
          </Text>
          {consent != "granted" ? (
            <HStack spacing="4" justifyContent="center">
              <ButtonLink
                href={siteConfig.meetlingUrl}
                variant={"primary"}
                size={"lg"}
              >
                Book a meeting
              </ButtonLink>
              <Text>or </Text>
              <Button
                onClick={() => setConsent("granted")}
                variant={"secondary"}
              >
                accept cookies
              </Button>{" "}
              <Text>to chat directly.</Text>
            </HStack>
          ) : (
            <Center>Use the chat icon in the lower right.</Center>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

/*
export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Star us on Github! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/schemamap/schemamap.svg?style=social&label=Star" />',
        href: "https://schemamap.dev",
        action: false,
      },
    },
  };
}
*/
