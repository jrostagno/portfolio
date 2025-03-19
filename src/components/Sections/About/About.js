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
            Hello there! I'm a front-end developer specializing in
            Typescript/Node/React, and a chemical engineer who graduated from
            the National University of Litoral in Argentina. I love the
            technology industry and its challenges, and enjoy the process of
            solving problems. I'm dedicated to continuous improvement and
            staying up-to-date with the latest technologies and tools. I'm
            studying mobile development with React Native, taking courses, and
            developing apps on my own. I'm passionate about collaborating on
            multidisciplinary teams, where I can contribute my technical
            knowledge. I'm constantly looking for opportunities to grow
            professionally and contribute to innovative projects.
          </Text>
          <Text
            fontSize={{ base: "md", sm: "lg" }}
            sx={stylesParagraphAbout}
          ></Text>
          <Text
            fontSize={{ base: "md", sm: "lg" }}
            sx={stylesParagraphAbout}
          ></Text>
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
