import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "components/section";
import { NextPage } from "next";
import Head from "next/head";

export const About: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>About - Schemamap.io</title>
      </Head>

      <Section innerWidth="container.xl">
        <VStack
          as="section"
          spacing="4"
          align={"flex-start"}
          my={{ base: "12", md: "50" }}
          minH={"50vh"}
          justifyContent={"center"}
          mx={"8"}
          maxW={"container.xl"}
          id="company-details"
        >
          <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
            Company details
          </Heading>
          <Text>Schemamap.io Kft. is an LLC registered in Hungary.</Text>
          <Text>
            Registration number: 01-09-416106
            <br />
            VAT number: HU32286276
          </Text>
          <Text> </Text>
          <Text>
            Address:
            <br />
            Bem József utca 9. Fsz. 10. ajtó
            <br />
            1027 Budapest
            <br />
            Hungary
          </Text>
        </VStack>
      </Section>
    </>
  );
};

export default About;
