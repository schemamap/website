import * as React from "react";
import type { NextPage } from "next";
import {
  Container,
  Box,
  Stack,
  HStack,
  Button,
  Icon,
  Heading,
  Text,
  useClipboard,
  IconButton,
  Link as ChakraLink,
  VStack,
  Center,
  useBreakpointValue,
  Code,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link } from "@saas-ui/react";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiCheckSquare,
  FiCopy,
  FiDatabase,
  FiLock,
  FiRefreshCcw,
  FiSearch,
  FiTrendingUp,
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

import { Highlights, HighlightsItem } from "components/highlights";
import siteConfig from "data/config";
import { FaBrain, FaGlobeEurope } from "react-icons/fa";
import { useConsent } from "components/consent";
import { HeroTabs } from "components/hero/tabs";
import CodePill from "components/highlights/codepill";
import { CompaniesSection } from "components/companies";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Schemamap.io - Data Movement Platform for Postgres"
        description="The best data migration solution you’ll never have to maintain."
      />
      <Box>
        <HeroSection />

        <FeaturesSection />

        <PricingSection />

        <FaqSection />

        <QuestionsSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  const orientation: "horizontal" | "vertical" | undefined = useBreakpointValue(
    {
      base: "vertical",
      md: "horizontal",
    },
    {
      fallback: "md",
    }
  );

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container
        maxW="container.xl"
        pt={{ base: 10, lg: 10 }}
        pb={{ base: 0, lg: 10 }}
      >
        <Stack direction={"column"} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            zIndex={1000}
            title={
              <FallInPlace>Instant batch data import for Postgres</FallInPlace>
            }
            description={
              <FallInPlace delay={0.1} fontWeight="medium">
                The best data migration solution you’ll never have to maintain.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.2}>
              <Center mt={10} justifyItems={"center"}>
                <ButtonLink
                  variant="primary"
                  size="lg"
                  href="https://accounts.schemamap.io/sign-up?utm_content=hero-cta&utm_source=schemamap.io"
                  height={12}
                  data-attr="signup"
                  mr={4}
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
                  Get started for free
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href={siteConfig.meetingUrl}
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
              </Center>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>
      <Container maxW="container.xl" pb="20">
        <FallInPlace delay={0.3}>
          <HeroTabs orientation={orientation} />
        </FallInPlace>
      </Container>

      <CompaniesSection />

      <HighlightsSection />

      {/* <TestimonialsSection /> */}

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
  const dockerRunText =
    "docker run --rm -e POSTGRES_PASSWORD=postgres -p 5432:5432 --name=schemamap_postgres schemamap/postgres";
  const dockerRun = useClipboard(dockerRunText);
  const brewInstallText = "brew install schemamap && schemamap init";
  const brewCmd = useClipboard(brewInstallText);

  return (
    <Highlights display={["none", "initial"]}>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Try it locally, no signup needed"
      >
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Replace your existing{" "}
            <Link isExternal href={"https://hub.docker.com/_/postgres"}>
              <Code>postgres</Code>
            </Link>{" "}
            container with our image:
          </Text>

          {/*           <UnorderedList>
            <ListItem>
              <Code>schemamap</Code> SDK pre-installed
            </ListItem>
            <ListItem>
              <Code>SELECT</Code>-able schema overview
            </ListItem>
            <ListItem>
              <Code></Code>
            </ListItem>
            <ListItem>
              Fixture/seed data management & restore for testing
            </ListItem>
          </UnorderedList> */}

          <Stack direction="column">
            <CodePill>
              <Box width={"full"}>
                <Text color="blue.400" display="inline">
                  $
                </Text>{" "}
                <Text color="yellow.400" display="inline">
                  docker run
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  <Link
                    href={"https://hub.docker.com/r/schemamap/postgres"}
                    isExternal
                  >
                    schemamap/postgres
                  </Link>
                </Text>
              </Box>
              <IconButton
                icon={dockerRun.hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy docker run command"
                onClick={dockerRun.onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </CodePill>
            <Text my={4} color="muted" fontSize="xl">
              or apply to your existing Postgres DB:
            </Text>
            <CodePill>
              <Box>
                <Text color="blue.400" display="inline">
                  $
                </Text>{" "}
                <Text color="yellow.400" display="inline">
                  brew install
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  schemamap
                </Text>
                <Text color="yellow.400" display="inline">
                  {" && "}
                </Text>
                <Text color="cyan.300" display="inline">
                  schemamap init
                </Text>
              </Box>
              <IconButton
                icon={brewCmd.hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy install command"
                onClick={brewCmd.onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </CodePill>
          </Stack>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Local-first DX">
        <Text color="muted" fontSize="lg">
          Schemamap.io is geared for developers who love using Postgres and know
          their way around SQL.
        </Text>
        <Text color="muted" fontSize="lg" mt={4}>
          By using a handful of stored procedures, you can benefit from
          Schemamap.io without leaving psql or your favorite SQL client.
        </Text>
      </HighlightsItem>
      {/* <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
        </HighlightsTestimonialItem> */}
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
          knowledge base for your data migrations.
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
            "All of your Postgres unique and check constraints get turned into their Excel-equivalent formulas and maintained as they change. Users get early feedback, before even importing.",
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
  return <Pricing {...pricing} />;
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
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing="4"
              alignItems={"center"}
              justifyContent="center"
            >
              <ButtonLink
                href={siteConfig.meetingUrl}
                variant={"primary"}
                size={"lg"}
              >
                Book a meeting
              </ButtonLink>
              <Text>or </Text>
              <Button
                onClick={() => setConsent("granted")}
                size={"lg"}
                variant={"secondary"}
              >
                accept cookies
              </Button>{" "}
              <Text>to chat directly.</Text>
            </Stack>
          ) : (
            <Center>Use the chat icon in the lower right.</Center>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
