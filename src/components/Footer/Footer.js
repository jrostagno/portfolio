import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgColor="gray.900"
      textAlign="center"
      letterSpacing="0.31em"
      color="gray.200"
      fontSize="md"
      textDecoration="none"
      fontFamily="heading"
      padding={5}
    >
      <Text>Javier Rostagno</Text>&copy;{new Date().getFullYear()}
    </Box>
  );
};

export default Footer;
