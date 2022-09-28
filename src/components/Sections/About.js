import React from "react";
import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Highlight,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import avatar from "../../assets/fotogithub.JPG";

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
          <Text
            as="p"
            color="slate300"
            fontSize="lg"
            fontWeight="300"
            letterSpacing="normal"
            paddingBottom={5}
            fontFamily="body"
            lineHeight="short"
          >
            Hello there! I am a curious Chemical Engineer who starts studying
            programming during quarantine time and now fascinates me.
            <br /> The technology industry has always caught my attention,its
            flexible ways of working, the bunch of opportunities they have, and
            the great capacity to impact change have sparked my interest in
            learning application development, which I found, I enjoy quite a
            bit.
          </Text>
          <Text
            as="p"
            color="slate300"
            fontSize="lg"
            paddingBottom={5}
            fontWeight="300"
            letterSpacing="normal"
            fontFamily="body"
            lineHeight="short"
          >
            In order to have a more comprehensive training, I carried out a Full
            Stack Developer Bootcamp of more than 800 hours of code, in which I
            carried out several projects. <br />
            After the Bootcamp, I had my first professional experience with a
            start-up Maslow, working as a Frontend developer, Maslow, which was
            a company that had just started from scratch and they had to prepare
            the MVP.
          </Text>
          <Text
            as="p"
            color="slate300"
            fontSize="lg"
            fontWeight="300"
            paddingBottom={5}
            letterSpacing="normal"
            fontFamily="body"
            lineHeight="short"
          >
            I am currently making applications on my own to continue practicing.
            I have a marked preference towards the Frontend, I like UI
            development and improving user experience, and I would like to
            continue delving into this area and learn technologies (React
            Native, Flutter) to be able to develop for mobile devices.
          </Text>
          <Text
            as="p"
            color="slate300"
            fontSize="lg"
            fontWeight="300"
            letterSpacing="normal"
            fontFamily="body"
            lineHeight="short"
          >
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
      <Flex gap="40">
        <Box>
          <List color="teal200" spacing={3}>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              JavaSript
            </ListItem>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              TypeScript
            </ListItem>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              Next
            </ListItem>
          </List>
        </Box>
        <Box>
          <List color="teal200" spacing={3}>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              Redux
            </ListItem>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              Node
            </ListItem>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              Express
            </ListItem>
            <ListItem>
              <ListIcon as={SmallAddIcon} color="teal200" />
              MongoDB
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
