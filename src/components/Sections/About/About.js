import React from "react";

import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import avatar from "../../../assets/fotogithub.JPG";
import { stylesParagraphAbout } from "./sylesAbout";

import { technologyList } from "../../../lib/constants";
import SectionDivider from "../../Divider/SectioDivider";

const About = () => {
  return (
    <Box id="about" border="1px solid white" paddingTop={40}>
      <SectionDivider query="01." section="01. About me" />
      <Box
        display="grid"
        gridTemplateColumns="3fr 2fr"
        paddingY={10}
        gap="50px"
      >
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
          minW="300px"
          maxW="300px"
        >
          <Image
            src={avatar}
            widht="full"
            objectFit="none"
            height="300px"
            borderRadius="2xl"
            alt="avatar"
          />
        </Box>
      </Box>
      <Grid templateColumns="repeat(3, 300px)" justifyContent="center" gap="5">
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
