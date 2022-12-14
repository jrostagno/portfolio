import { Divider, Flex, Heading, Highlight } from "@chakra-ui/react";
import React from "react";

const SectionDivider = ({ query, section }) => {
  return (
    <Flex alignItems="center" gap="6">
      <Heading
        fontSize={{ base: "1.5rem", md: "2rem" }}
        color="slate100"
        fontWeight="600"
      >
        <Highlight
          query={query}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.200" }}
        >
          {section}
        </Highlight>
      </Heading>
      <Divider
        display={{ base: "none", md: "block" }}
        width="250px"
        borderColor={"teal.200"}
      />
    </Flex>
  );
};

export default SectionDivider;
