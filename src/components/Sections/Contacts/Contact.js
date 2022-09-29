import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Highlight,
  Link,
  Text,
} from "@chakra-ui/react";

import { styleContactButton, styleLinks } from "./stylesContact";
import { contactLinks } from "../../../lib/constants";

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
            <Button sx={styleContactButton}>Contact Me !</Button>
          </Link>
          <Flex gap={10}>
            {contactLinks.map((link) => (
              <Link
                key={link.hred}
                href={link.href}
                target="_blank"
                sx={styleLinks}
              >
                {link.icon}
              </Link>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
