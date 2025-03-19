import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { styleTitle, styleTitle2 } from "./stylesHero";

const Hero = () => {
  return (
    <Stack
      paddingY={20}
      as="section"
      spacing={8}
      height="100vh"
      bgColor="primary"
    >
      <Text
        as="h1"
        color="teal200"
        fontSize={{ base: "0.8rem", sm: "1.25rem" }}
        fontWeight="500"
        letterSpacing={{ base: "normal", sm: "wider" }}
        fontFamily="heading"
      >
        Hello there, I am ...
      </Text>
      <Stack>
        <Text
          fontSize={{ base: "2.4rem", sm: "3.5rem", md: "5rem" }}
          lineHeight={{ base: "2.7rem", sm: "3.7rem", md: "4.7rem" }}
          sx={styleTitle}
          as="h2"
        >
          Javier Rostagno.
        </Text>
        <Text
          bgGradient="linear(to-t, #76E4F7, #9F7AEA)"
          lineHeight={{ base: "2.7rem", sm: "3.7rem", md: "4.7rem" }}
          bgClip="text"
          fontSize={{ base: "2.4rem", sm: "3.5rem", md: "5rem" }}
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
        fontSize={{ base: "lg", sm: "1.25rem" }}
        fontWeight="400"
        letterSpacing={{ base: "normal", sm: "wider" }}
        fontFamily="body"
        lineHeight={{ base: "7", sm: "8" }}
        opacity="0.6"
      >
        I'm an engineer who loves the technology industry and its challenges,
        and enjoy the process of solving problems. I love building accessible,
        interactive, and dynamic pixel-perfect digital experiences for the web.
      </Text>
    </Stack>
  );
};

export default Hero;
