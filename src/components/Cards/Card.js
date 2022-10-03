import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ img, title, subtitle, stack, description, github, url }) => {
  return (
    <>
      <Accordion borderColor="navy" allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box
              // bgImage={{
              //   base: `url(${img})`,
              // }}
              height="300px"
              width="full"
              backdropBlur="8px"
              backdropFilter="auto"
              boxShadow="dark-lg"
              bgRepeat="no-repeat"
              rounded="2xl"
              bgColor="navy"
              bgPosition="center center"
              bgSize={{ base: "90% auto" }}
            >
              <Stack
                _groupHover={{
                  visibility: "invisible",
                  transition: "1000ms",
                  transitionDelay: "250ms",
                  bgColor: "navy",
                  filter: "none",
                  bgImage: `url(${img})`,
                  bgSize: { base: "45% auto" },
                  bgPosition: "center center",
                  bgRepeat: "no-repeat",
                }}
                visibility="invisible"
                width="full"
                height="full"
                rounded="2xl"
                backdropFilter="auto"
                spacing={2}
                paddingX={4}
              >
                <Box
                  padding="10"
                  display="flex"
                  gap="5"
                  justifyContent="flex-end"
                >
                  <Link target="_blank" href={github}>
                    <Icon
                      fontSize="xl"
                      _hover={{
                        color: "teal200",
                      }}
                      color="slate100"
                      as={FaGithub}
                    />
                  </Link>
                  <Link target="_blank" href={url}>
                    <Icon
                      fontSize="xl"
                      _hover={{
                        color: "teal200",
                      }}
                      color="slate100"
                      as={FaExternalLinkAlt}
                    />
                  </Link>
                </Box>
                <Box paddingX={6}>
                  <Text
                    textAlign="left"
                    fontSize="xl"
                    _groupHover={{
                      visibility: "hidden",
                    }}
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
                    _groupHover={{
                      visibility: "hidden",
                    }}
                    opacity="0.5"
                    as="p"
                  >
                    {subtitle}
                  </Text>
                </Box>
                <Flex padding={5} gap={3} flexWrap="wrap" marginBottom="0px">
                  {stack.map((skill) => (
                    <Text
                      fontSize="sm"
                      fontFamily="heading"
                      fontWeight="300"
                      color="teal.200"
                      as="h4"
                    >
                      {skill}
                    </Text>
                  ))}
                </Flex>
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
