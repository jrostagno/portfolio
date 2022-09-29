import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { styleTitle } from "./stylesHero";

const Hero = () => {
  return (
    <Stack
      paddingY="10"
      as="section"
      spacing={8}
      height="100vh"
      bgColor="primary"
    >
      <Text
        as="h1"
        color="teal200"
        fontSize="md"
        fontWeight="500"
        letterSpacing="wider"
        fontFamily="heading"
      >
        Hello there, I am ...
      </Text>
      <Stack spacing="-3">
        <Text sx={styleTitle} as="h2">
          Javier Rostagno.
        </Text>
        <Text as="h2" sx={styleTitle}>
          I build things for the web.
        </Text>
      </Stack>
      <Text
        maxW="600px"
        as="p"
        color="slate300"
        fontSize="lg"
        fontWeight="400"
        letterSpacing="normal"
        fontFamily="body"
        lineHeight="7"
      >
        I am a Full stack developer with a preference for Frontend, I like
        creating nice UI. I develop my app With React and love using libraries
        such as Tailwinds and Chakra UI.
      </Text>
    </Stack>
  );
};

export default Hero;
