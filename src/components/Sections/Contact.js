import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Highlight,
  Icon,
  Link,
  scaleFadeConfig,
  Text,
} from "@chakra-ui/react";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Box id="contact" height="100vh" marginTop={20}>
      <Flex alignItems="center" gap="6">
        <Heading color="slate100" fontWeight="600">
          <Highlight
            query="04."
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.200" }}
          >
            04. Get in touch
          </Highlight>
        </Heading>
        <Divider width="400px" borderColor={"teal.200"} />
      </Flex>
      <Box display="flex" flexDirection="column" gap={20} padding={10}>
        <Text color="slate300" fontSize="lg">
          Please get in contact with me, I am always open to listening to new
          opportunities... Click!
        </Text>
        <Box display="flex" alignItems="center" gap={20}>
          <Link href="mailto:javier.rostagno@gmail.com">
            <Button
              border-radius="58px"
              marginX="auto"
              _hover={{
                color: "#c084fc",
              }}
              color="slate100"
              borderColor="teal.200"
              padding="40px"
              colorScheme="teal.200"
              fontFamily="heading"
              variant="outline"
            >
              Contact Me !
            </Button>
          </Link>
          <Flex gap={10}>
            <Link href="https://wa.me/+5491132615516" target="_blank">
              <Box
                _hover={{
                  color: "#c084fc",
                  transform: "scale(1.25)",
                  transition: "300ms",
                }}
                fontSize={20}
                color="teal.200"
              >
                <FaWhatsapp />
              </Box>
            </Link>
            <Link href="https://github.com/jrostagno" target="_blank">
              <Box
                fontSize={20}
                color="teal.200"
                _hover={{
                  color: "#c084fc",
                  transform: "scale(1.25)",
                  transition: "300ms",
                }}
              >
                <FaGithub />
              </Box>
            </Link>

            <Link
              href="https://twitter.com/RostagnoJavier"
              target="_blank"
              _hover={{
                color: "#c084fc",
                transform: "scale(1.25)",
                transition: "300ms",
              }}
            >
              <Box
                fontSize={20}
                color="teal.200"
                _hover={{
                  color: "#c084fc",
                  transform: "scale(1.25)",
                  transition: "300ms",
                }}
              >
                <FaTwitter />
              </Box>
            </Link>

            <Link
              href="https://www.instagram.com/javier.rostagno/"
              target="_blank"
            >
              <Box
                _hover={{
                  color: "#c084fc",
                  transform: "scale(1.25)",
                  transition: "300ms",
                }}
                fontSize={20}
                color="teal.200"
              >
                <FaInstagram />
              </Box>
            </Link>

            <Link
              href="https://www.linkedin.com/in/javier-rostagno/"
              target="_blank"
            >
              <Box
                _hover={{
                  color: "#c084fc",
                  transform: "scale(1.25)",
                  transition: "300ms",
                }}
                fontSize={20}
                color="teal.200"
              >
                <FaLinkedinIn />
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
