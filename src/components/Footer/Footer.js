import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-b, #0A192F, #1D4044)"
      textAlign="center"
      letterSpacing="0.31em"
      color="gray.200"
      fontSize="sm"
      textDecoration="none"
      fontFamily="heading"
      padding={3}
    >
      <Text>Javier Rostagno</Text>&copy;{new Date().getFullYear()}
    </Box>
  );
};

export default Footer;
