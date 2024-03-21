import * as React from "react";
import { Flex } from "@chakra-ui/react";

const CodePill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      rounded="full"
      borderWidth="1px"
      flexDirection="row"
      alignItems="center"
      py="1"
      ps="8"
      pe="2"
      bg="gray.800"
      _dark={{ bg: "gray.900" }}
    >
      {children}
    </Flex>
  );
};

export default CodePill;
