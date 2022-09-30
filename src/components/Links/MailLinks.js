import { Box, Link } from "@chakra-ui/react";
import React from "react";

const MailLinks = () => {
  return (
    <Box
      width="40px"
      position="fixed"
      bottom="0"
      right="40px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
    >
      <Link
        sx={{ writingMode: "vertical-lr" }}
        href="mailto:javier.rostagno@gmail.com"
        letterSpacing="0.2em"
        color="slate100"
        _hover={{
          textDecoration: "none",
          color: "teal.200",
          transform: "translateY(-10%)",
          transitionDelay: "400ms",
          transition: "800ms",
        }}
        fontSize="xs"
        textDecoration="none"
        fontFamily="heading"
      >
        javier.rostagno@gmail.com
      </Link>

      <Box height="120px" borderRight="1px" borderColor="slate100"></Box>
    </Box>
  );
};

export default MailLinks;
