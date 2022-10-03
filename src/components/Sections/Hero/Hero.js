import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { styleTitle, styleTitle2 } from "./stylesHero";

const Hero = () => {
  return (
    <Stack
      paddingY={20}
      as="section"
      spacing={10}
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
      <Stack>
        <Text sx={styleTitle} as="h2">
          Javier Rostagno.
        </Text>
        <Text
          bgGradient="linear(to-t, #76E4F7, #9F7AEA)"
          bgClip="text"
          fontSize="5rem"
          fontFamily="body"
          sx={styleTitle2}
          fontWeight="700"
          as="h2"
        >
          Web developer
        </Text>
      </Stack>
      <Text
        maxW="900px"
        as="p"
        color="slate300"
        fontSize="1.25rem"
        fontWeight="400"
        letterSpacing="wider"
        fontFamily="body"
        lineHeight="8"
        opacity="0.6"
      >
        I am a Full stack developer with a preference for Frontend, I like
        creating nice UI. I develop my app With React and love using libraries
        such as Tailwinds and Chakra UI.
      </Text>
    </Stack>
  );
};

export default Hero;
