import React from "react";
import AOS from "aos";

import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import avatar from "../../../assets/fotogithub.JPG";
import { stylesParagraphAbout } from "./sylesAbout";

import { technologyList } from "../../../lib/constants";
import SectionDivider from "../../Divider/SectioDivider";

const About = () => {
  AOS.init();
  return (
    <Box id="about" paddingTop={40}>
      <SectionDivider query="01." section="01. About me" />
      <Box
        display={{ base: "flex", lg: "grid" }}
        flexDirection="column-reverse"
        gridTemplateColumns="3fr 2fr"
        justifyContent="center"
        alignItems={{ base: "center", lg: "start" }}
        paddingY={10}
        gap={{ base: "40px", sm: "90px" }}
      >
        <Box
          textAlign={{ base: "center", md: "justify" }}
          data-aos="fade-up"
          maxW="2xl"
        >
          <Text
            as="p"
            paddingBottom={{ base: "1", sm: "5" }}
            fontSize={{ base: "md", sm: "lg" }}
            lineHeight={{ base: "inherit", sm: "short" }}
            sx={stylesParagraphAbout}
          >
            Hello there! I am a curious{" "}
            <span style={{ color: "#81E6D9", opacity: "1" }}>
              Chemical Engineer
            </span>{" "}
            who started studying programming during quarantine time and now it
            fascinates me.
            <br /> The technology industry has always caught my attention, its
            flexible ways of working, the bunch of opportunities they have, and
            the great capacity to impact change have sparked my interest in
            learning application development, which I found, I enjoy quite a
            bit.
          </Text>
          <Text fontSize={{ base: "md", sm: "lg" }} sx={stylesParagraphAbout}>
            In order to have more comprehensive training, I carried out a{" "}
            <span
              style={{ color: "#81E6D9", opacity: "1", marginRight: "4px" }}
            >
              Full Stack Developer
            </span>
            Bootcamp of more than 800 hours of code, in which I carried out
            several projects. <br />
          </Text>
          <Text fontSize={{ base: "md", sm: "lg" }} sx={stylesParagraphAbout}>
            I am currently making applications on my own to continue practicing.
            I have a marked preference towards the Frontend, I like UI
            development and improving user experience, and I would like to
            continue delving into this area and learn technologies (React
            Native) to be able to develop for mobile devices.
          </Text>
          <Text fontSize={{ base: "md", sm: "lg" }} sx={stylesParagraphAbout}>
            These are the technologies with which I have been working:
          </Text>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-duration="2000"
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
      <Grid
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
        justifyContent="center"
        gap="5"
      >
        {technologyList.map((tech) => (
          <GridItem key={tech.tech}>
            <Flex
              color="teal.400"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Box
                fontSize="xl"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "300ms",
                }}
              >
                {tech.icon}
              </Box>
              <Text as="h3" color="slate300" fontFamily="heading" fontSize="sm">
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
