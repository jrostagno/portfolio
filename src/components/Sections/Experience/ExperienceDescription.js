import React from "react";
import { Box, Flex, Highlight, Icon, Text } from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import {
  stylesDescriptionExperience,
  stylesDescriptionStack,
} from "./stylesExperience";

const ExperienceDescription = ({ description, company, date, stack }) => {
  return (
    <Flex alignItems="center">
      <Box padding={{ base: "0", sm: "3", md: "6" }}>
        <Flex alignItems="center" gap={2}>
          <Icon
            fontSize={{ base: "0.8rem", sm: "lg" }}
            color="teal.200"
            as={FaCaretRight}
          />
          <Highlight
            fontSize="md"
            query={company}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "teal.200",
              color: "slate900",
            }}
          >
            {company}
          </Highlight>
          <Text
            fontFamily="heading"
            color="gray.500"
            fontSize={{ base: "xs", sm: "lg", md: "md" }}
          >
            {date}
          </Text>
        </Flex>

        <Text
          fontSize={{ base: "0.8rem", sm: "lg", sm: "md" }}
          sx={stylesDescriptionExperience}
          as="p"
        >
          {description}
        </Text>
        <Text
          fontSize={{ base: "0.8rem", sm: "lg", sm: "md" }}
          sx={stylesDescriptionStack}
          as="p"
        >
          {stack}
        </Text>
      </Box>
    </Flex>
  );
};

export default ExperienceDescription;
