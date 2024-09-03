import {
  Box,
  Card,
  CardProps,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  useTheme,
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import { Section, SectionProps } from "components/section";
import { Testimonial, TestimonialProps } from "components/testimonials";

export interface HighlightBoxProps
  extends GridItemProps,
    Omit<CardProps, "title"> {}

export const HighlightsItem: React.FC<HighlightBoxProps> = (props) => {
  const { children, title, ...rest } = props;
  return (
    <GridItem
      as={Card}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="flex-start"
      spacing="8"
      position="relative"
      {...rest}
    >
      {title && (
        <Heading fontSize="3xl" mb="8">
          {title}
        </Heading>
      )}
      {children}
    </GridItem>
  );
};

export const Highlights: React.FC<SectionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Section
      innerWidth="container.xl"
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={8}
        position="relative"
      >
        {children}
      </Grid>
    </Section>
  );
};
