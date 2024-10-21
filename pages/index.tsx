import * as React from "react";
import type { NextPage } from "next";
import {
  Container,
  Box,
  Stack,
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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link } from "@saas-ui/react";
import {
  FiArrowRight,
  FiCheck,
  FiCheckSquare,
  FiCopy,
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

import faq from "data/faq";
import pricing from "data/pricing";

import { Highlights, HighlightsItem } from "components/highlights";
import siteConfig from "data/config";
import { FaBrain } from "react-icons/fa";
import { useConsent } from "components/consent";
import { HeroImages } from "components/hero/tabs";
import CodePill from "components/highlights/codepill";
import { CompaniesSection } from "components/companies";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Schemamap.io - Sync data from any Postgres DB to another"
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
              <FallInPlace delay={0.05}>
                Sync data from any Postgres DB to another{" "}
              </FallInPlace>
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
                  href={"/demo"}
                  variant="primary"
                  data-attr="signup"
                  px={30}
                  fontSize="x-large"
                  py={"30px"}
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(7px)",
                        },
                      }}
                    />
                  }
                >
                  Try demo
                </ButtonLink>
              </Center>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>
      <Container width={{ base: "full", lg: "90%" }} maxW="1800px" my="30">
        <FallInPlace delay={0.4}>
          <HeroImages />
        </FallInPlace>
      </Container>

      <CompaniesSection />

      <InstallSection />
    </Box>
  );
};

const DockerInstall = () => {
  const dockerRunText =
    "docker run --rm -e POSTGRES_PASSWORD=postgres -p 5432:5432 --name=schemamap_postgres schemamap/postgres";
  const dockerRun = useClipboard(dockerRunText);

  return (
    <VStack alignItems={"stretch"} spacing="4" w="full">
      <Text color="muted" fontSize="xl">
        Replace your existing{" "}
        <Link isExternal href={"https://hub.docker.com/_/postgres"}>
          <Code>postgres</Code>
        </Link>{" "}
        container with our image:
      </Text>

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
    </VStack>
  );
};

const BinaryInstall = () => {
  const brewInstallText =
    "brew install schemamap/tap/schemamap && schemamap init";
  const brewCmd = useClipboard(brewInstallText);

  const nixInstallText =
    "nix profile install nixpkgs#schemamap && schemamap init";
  const nixCmd = useClipboard(nixInstallText);

  return (
    <VStack alignItems="flex-start" spacing="0" w="full">
      <Tabs w="full">
        <TabList>
          <Tab>Brew</Tab>
          <Tab>Nix</Tab>
          <Tab>Docker</Tab>
          <Tab>Binary</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px="0">
            <CodePill>
              <Box w="full">
                <Text color="blue.400" display="inline">
                  $
                </Text>{" "}
                <Text color="yellow.400" display="inline">
                  brew install
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  <Link
                    href="https://github.com/schemamap/homebrew-tap/blob/main/Formula/schemamap.rb"
                    isExternal
                  >
                    schemamap/tap/schemamap
                  </Link>
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
          </TabPanel>
          <TabPanel px="0">
            <CodePill>
              <Box w="full">
                <Text color="blue.400" display="inline">
                  $
                </Text>{" "}
                <Text color="yellow.400" display="inline">
                  nix profile install
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  <Link
                    href="https://search.nixos.org/packages?channel=unstable&show=schemamap&from=0&size=50&sort=relevance&type=packages&query=schemamap"
                    isExternal
                  >
                    nixpkgs#schemamap
                  </Link>
                </Text>
                <Text color="yellow.400" display="inline">
                  {" && "}
                </Text>
                <Text color="cyan.300" display="inline">
                  schemamap init
                </Text>
              </Box>
              <IconButton
                icon={nixCmd.hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy install command"
                onClick={nixCmd.onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </CodePill>
          </TabPanel>
          <TabPanel px="0">
            <DockerInstall />
          </TabPanel>
          <TabPanel px="0">
            <OrderedList>
              <ListItem>
                Download latest binary from the{" "}
                <Link
                  href="https://github.com/schemamap/schemamap/releases/latest"
                  isExternal
                  textDecoration={"underline"}
                >
                  releases page on Github
                </Link>
              </ListItem>
              <ListItem>
                Add to your <Code>$PATH</Code>
              </ListItem>
              <ListItem>
                <Code>schemamap init</Code>
              </ListItem>
            </OrderedList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

const InstallSection = () => {
  return (
    <Highlights display={["none", "initial"]}>
      <HighlightsItem
        title="Try it with your local Postgres DB, no signup needed"
        colSpan={[5]}
      >
        <BinaryInstall />
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      mb="20"
      id="features"
      innerWidth={"container.xl"}
      title={
        /*         <Heading
          lineHeight="tall"
          fontSize={"2xl"}
          mt="30"
          textAlign="left"
          as="div"
        >
          <q>
            Show me your flowcharts and conceal your tables, and I shall
            continue to be mystified. <br />
            Show me your tables, and I won&apos;t usually need your flowcharts;
            they&apos;ll be obvious.
          </q>
          <Box color="muted" fontSize="medium">
            -- Fred Brooks, Mythical Man Month
          </Box>
        </Heading> */ ""
      }
      description={
        <Box mt={6} mb="30" color="white">
          <p>
            Schemamap introspects your Postgres schema, giving you unprecedented
            control over your system&apos;s state.
          </p>
          <p>
            Finally you can copy database records as easily as files, without
            any DDL changes.
          </p>
        </Box>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Repeatable processes.",
          icon: FiRefreshCcw,
          description:
            "Data migrations have been historically ad-hoc processes. Schemamap.io allows reruns and amendments, by handling the import process for you.",
        },
        {
          title: "Automatic data validation.",
          icon: FiCheckSquare,
          description:
            "All of your Postgres unique and check constraints are considered. This way the feasibility of your data migrations is checked before even importing.",
        },
        {
          title: "(De-)normalization.",
          icon: FaBrain,
          description: (
            <span>
              Existing ETL tools only work for single tables. Schemamap.io can{" "}
              <u>copy related records together</u> automatically.
            </span>
          ),
        },
        {
          title: "Secure by default.",
          icon: FiLock,
          description:
            "Schemamap.io uses the least amount of database resources and permissions for each stage of your adoption. By default it cannot even modify your live tables, only preparing data migrations.",
        },
        {
          title: "In-memory transforms.",
          icon: FiTrendingUp,
          description:
            "Schemamap.io never stores your data. It transfers it from and to your database in a heavily sandboxed environment, with tens of GBs of RAM readily available. So you don't have to worry about servers.",
        },
        {
          title: "Schema tracking & comparison.",
          icon: FiSearch,
          description:
            "Track your database schema along with constraints across environments (Local/CI/Staging/Prod) and see how it evolves. Easily spot differences, regardless of the platform or provider.",
        },
      ]}
    />
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
      <Container maxW="container.xl" mb="60">
        <Stack spacing="10" alignItems={"center"}>
          <Heading as="h2" fontSize="4xl" textAlign="center">
            Any questions?
          </Heading>

          <ButtonLink
            href={siteConfig.meetingUrl}
            variant={"primary"}
            size={"lg"}
            px={"50px"}
            py={"30px"}
          >
            Talk to the founder
          </ButtonLink>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/schemamap/schemamap.svg?style=social&label=Star" alt="Schemamap stars on Github" />',
        href: "https://github.com/schemamap/schemamap",
        action: false,
      },
    },
  };
}
