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
import SectionDivider from "../../Divider/SectioDivider";

const Contact = () => {
  return (
    <Box
      id="contact"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <SectionDivider query="04." section="04. Get in touch" />
      <Box display="flex" flexDirection="column" gap={20} padding={10}>
        <Text color="slate300" fontSize="lg">
          Please get in contact with me, I am always open to listening to new
          opportunities... Click!
        </Text>
        <Box display="flex" flexDirection="column" alignItems="center" gap={10}>
          <Link href="mailto:javier.rostagno@gmail.com">
            <Button sx={styleContactButton}>Contact Me !</Button>
          </Link>
          <Flex gap={10}>
            {contactLinks.map((link) => (
              <Link
                key={link.href}
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
