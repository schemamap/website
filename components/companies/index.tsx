import { Link, Stack } from "@chakra-ui/react";
import { Section } from "components/section";
import Image from "next/image";

export const CompaniesSection = () => {
  const bg = "gray.900";
  const linkProps = {
    isExternal: true,
    bg,
    p: 8,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "md",
  };

  return (
    <Section
      innerWidth="container.xl"
      position="relative"
      overflow="hidden"
      py={0}
    >
      <Stack
        spacing={8}
        alignItems="center"
        justifyContent={"center"}
        direction={["column", null, "row"]}
      >
        <Link href="https://deep-impact.ch" {...linkProps}>
          <Image
            src="/static/images/deep_impact_logo.svg"
            width={200}
            height={100}
            alt="Deep Impact AG Logo"
          />
        </Link>
        <Link href="https://deepico.ch" {...linkProps}>
          <Image
            src="/static/images/deepico_logo.png"
            width={220}
            height={100}
            alt="deepico AG Logo"
          />
        </Link>
        <Link href="https://heypatient.ch" {...{ ...linkProps }}>
          <Image
            src="/static/images/heypatient_logo.png"
            width={216}
            height={216}
            alt="heyPatient AG Logo"
          />
        </Link>
      </Stack>
    </Section>
  );
};
