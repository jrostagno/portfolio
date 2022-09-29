import React from "react";

import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";
import avatar from "../../../assets/fotogithub.JPG";
import { stylesParagraphAbout } from "./sylesAbout";

import { technologyList } from "../../../lib/constants";

const About = () => {
  return (
    <Box id="about" height="100vh" marginTop={20}>
      <Flex alignItems="center" gap="6">
        <Heading color="slate100" fontWeight="600">
          <Highlight
            query="01."
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.200" }}
          >
            01. About me
          </Highlight>
        </Heading>
        <Divider width="400px" borderColor={"teal.200"} />
      </Flex>
      <Box display="flex" paddingY="10" justifyContent="space-between">
        <Box maxW="2xl">
          <Text sx={stylesParagraphAbout}>
            Hello there! I am a curious Chemical Engineer who starts studying
            programming during quarantine time and now fascinates me.
            <br /> The technology industry has always caught my attention,its
            flexible ways of working, the bunch of opportunities they have, and
            the great capacity to impact change have sparked my interest in
            learning application development, which I found, I enjoy quite a
            bit.
          </Text>
          <Text sx={stylesParagraphAbout}>
            In order to have a more comprehensive training, I carried out a Full
            Stack Developer Bootcamp of more than 800 hours of code, in which I
            carried out several projects. <br />
            After the Bootcamp, I had my first professional experience with a
            start-up Maslow, working as a Frontend developer, Maslow, which was
            a company that had just started from scratch and they had to prepare
            the MVP.
          </Text>
          <Text sx={stylesParagraphAbout}>
            I am currently making applications on my own to continue practicing.
            I have a marked preference towards the Frontend, I like UI
            development and improving user experience, and I would like to
            continue delving into this area and learn technologies (React
            Native, Flutter) to be able to develop for mobile devices.
          </Text>
          <Text sx={stylesParagraphAbout}>
            These are the technologies with which I have been working:
          </Text>
        </Box>
        <Box
          overflow="hidden"
          filter="grayscale(80%)"
          borderRadius="2xl"
          minW="250px"
          maxW="250px"
        >
          <Image
            src={avatar}
            widht="full"
            objectFit="none"
            height="250px"
            borderRadius="2xl"
            alt="avatar"
          />
        </Box>
      </Box>
      <Grid templateColumns="repeat(3, 300px)" gap="5">
        {technologyList.map((tech) => (
          <GridItem key={tech.tech}>
            <Flex color="teal.400" alignItems="center" gap={2}>
              <Box
                fontSize="xl"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "300ms",
                }}
              >
                {tech.icon}
              </Box>
              <Text as="h3" color="slate300" fontFamily="heading" fontSize="xs">
                {tech.tech}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
