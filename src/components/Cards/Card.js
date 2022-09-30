import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ img, title, subtitle, stack, description }) => {
  return (
    <>
      <Accordion borderColor="navy" allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box
              bgImage={{
                base: `url(${img})`,
              }}
              padding={0}
              width="full"
              backdropBlur="8px"
              backdropFilter="auto"
              height="full"
              boxShadow="2px 6px 10px #319795"
              bgRepeat="no-repeat"
              rounded="2xl"
              bgColor="navy"
              bgPosition="center center"
              bgSize={{ base: "80% auto" }}
            >
              <Stack
                _groupHover={{
                  visibility: "visible",
                  transition: "1000ms",
                  transitionDelay: "250ms",
                  bgColor: "navy",
                  filter: "none",
                }}
                visibility="hidden"
                rounded="2xl"
                backdropFilter="auto"
                spacing={2}
              >
                <Box
                  padding="10"
                  display="flex"
                  gap="5"
                  justifyContent="flex-end"
                >
                  <Icon
                    fontSize="xl"
                    _hover={{
                      color: "teal200",
                    }}
                    color="slate100"
                    as={FaGithub}
                  />
                  <Icon
                    fontSize="xl"
                    _hover={{
                      color: "teal200",
                    }}
                    color="slate100"
                    as={FaExternalLinkAlt}
                  />
                </Box>
                <Box padding={6}>
                  <Text
                    textAlign="left"
                    fontSize="xl"
                    fontWeight="600"
                    color="slate100"
                    as="h3"
                  >
                    {title}
                  </Text>
                  <Text
                    textAlign="left"
                    fontSize="lg"
                    fontWeight="300"
                    letterSpacing="wide"
                    lineHeight={6}
                    color="slate300"
                    as="p"
                  >
                    {subtitle}
                  </Text>
                </Box>
                <Text
                  padding={4}
                  fontSize="lg"
                  fontFamily="heading"
                  fontWeight="300"
                  color="teal200"
                  as="h4"
                >
                  {stack}
                </Text>
              </Stack>
            </Box>
          </AccordionButton>

          <AccordionPanel
            fontSize="sm"
            fontFamily="heading"
            textAlign="center"
            color="slate100"
            paddingX={10}
            pb={4}
          >
            {description}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Card;
