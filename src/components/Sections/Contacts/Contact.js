import React from "react";
import AOS from "aos";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";

import { styleContactButton, styleLinks } from "./stylesContact";
import { contactLinks } from "../../../lib/constants";
import SectionDivider from "../../Divider/SectioDivider";

const Contact = () => {
  AOS.init();
  return (
    <Box
      id="contact"
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      paddingTop={40}
      paddingBottom={20}
    >
      <SectionDivider query="04." section="04. Get in touch" />
      <Box
        data-aos="zoom-in-up"
        maxW="800px"
        display="flex"
        marginTop={{ base: "10", sm: "20" }}
        flexDirection="column"
        gap={{ base: "10", sm: "20" }}
        padding={10}
      >
        <Text color="slate300" textAlign="center" opacity="0.6" fontSize="lg">
          Please get in contact with me, I am always open to listening to new
          opportunities, Send me an email I will try to answer as soon as
          possible! Click!
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
