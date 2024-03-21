import { Container, Flex, FlexProps, Text, VStack } from "@chakra-ui/react";

interface HeroProps extends Omit<FlexProps, "title"> {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex pt="20" alignItems="center" {...rest}>
      <Container maxW="container.xl">
        <VStack spacing={[4, null, 6]} alignItems="flex-center">
          <Text as="h1" textStyle="h2" textAlign="center">
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="center"
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  );
};
