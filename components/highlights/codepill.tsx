import * as React from "react";
import { Flex } from "@chakra-ui/react";

const CodePill: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      rounded={{ base: "10", sm: "full" }}
      borderWidth="1px"
      flexDirection="row"
      alignItems="center"
      py="2"
      px={{ base: 4, sm: "8" }}
      bg="gray.800"
      overflow={"break-word"}
      overflowWrap={"break-word"}
      _dark={{ bg: "gray.900" }}
    >
      {children}
    </Flex>
  );
};

export default CodePill;
