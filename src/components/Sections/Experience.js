import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Highlight,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaCaretRight } from "react-icons/fa";

const Experience = () => {
  const [isSelected, setIsSelected] = useState(20);
  return (
    <Box id="experience" height="100vh" marginTop={20} marginBottom={20}>
      <Flex alignItems="center" gap="6">
        <Heading color="slate100" fontWeight="600">
          <Highlight
            query="02."
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.200" }}
          >
            02. Dev Experience & more..
          </Highlight>
        </Heading>
        <Divider width="300px" borderColor={"teal.200"} />
      </Flex>
      <Box marginTop={20} marginX="auto" maxW="800px">
        <Flex>
          <Stack spacing={0} borderLeft="1px solid" borderColor="gray.600">
            <Button
              rounded="none"
              borderLeft="1px solid #4A5568"
              paddingY="40px"
              paddingX="40px"
              colorScheme="navy"
              _focus={{
                backgroundColor: "#1e293b",
              }}
              _hover={{
                color: "#81E6D9",
                borderLeft: "1px solid #81E6D9",
              }}
              onClick={() => setIsSelected(20)}
            >
              Maslow
            </Button>
            <Button
              rounded="none"
              borderLeft="1px solid #4A5568"
              _focus={{
                backgroundColor: "#1e293b",
              }}
              paddingY="40px"
              paddingX="40px"
              _hover={{
                color: "#81E6D9",
                borderLeft: "1px solid #81E6D9",
              }}
              colorScheme="navy"
              onClick={() => setIsSelected(30)}
            >
              Foodarity
            </Button>
            <Button
              _hover={{
                color: "#81E6D9",
                borderLeft: "1px solid #81E6D9",
              }}
              _focus={{
                backgroundColor: "#1e293b",
              }}
              rounded="none"
              borderLeft="1px solid #4A5568"
              paddingY="40px"
              paddingX="40px"
              colorScheme="navy"
              onClick={() => setIsSelected(40)}
            >
              Emerson
            </Button>
            <Button
              _hover={{
                color: "#81E6D9",
                borderLeft: "1px solid #81E6D9",
              }}
              _focus={{
                backgroundColor: "#1e293b",
              }}
              rounded="none"
              borderLeft="1px solid #4A5568"
              paddingY="40px"
              paddingX="40px"
              colorScheme="navy"
              onClick={() => setIsSelected(50)}
            >
              Netzsch
            </Button>
          </Stack>
          <Box>
            {isSelected === 20 && (
              <Flex alignItems="center">
                <Box padding={6}>
                  <Flex alignItems="center" gap={2}>
                    <Icon fontSize="20px" color="teal.200" as={FaCaretRight} />
                    <Highlight
                      fontSize="md"
                      query="MASLOW"
                      styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "teal.200",
                      }}
                    >
                      MASLOW
                    </Highlight>
                    <Text fontFamily="heading" color="gray.500" fontSize="md">
                      jan 22- jul 22
                    </Text>
                  </Flex>
                  <Text
                    padding={3}
                    color="slate300"
                    fontSize="md"
                    fontWeight="300"
                    letterSpacing="normal"
                    paddingBottom={3}
                    fontFamily="heading"
                    lineHeight="short"
                    as="p"
                  >
                    Frontend Developer - Maslow is a start-up dedicated to
                    offering company services, focused on their employees
                    compensation systems. MVP creation, and development of
                    different features for Maslow web application.
                  </Text>
                  <Text
                    padding={3}
                    color="teal.100"
                    fontSize="md"
                    fontWeight="300"
                    letterSpacing="normal"
                    paddingBottom={3}
                    fontFamily="heading"
                    lineHeight="short"
                    as="p"
                  >
                    Skills: Storybooks · Trello · Kanban · Next.js · JavaScript
                    · React.js · Tailwind CSS
                  </Text>
                </Box>
              </Flex>
            )}
            {isSelected === 30 && (
              <Flex alignItems="center">
                <Box padding={6}>
                  <Flex alignItems="center" gap={2}>
                    <Icon fontSize="20px" color="teal.200" as={FaCaretRight} />
                    <Highlight
                      fontSize="md"
                      query="Foodarity APP -[Academic project]"
                      styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "teal.200",
                      }}
                    >
                      Foodarity APP -[Academic project]
                    </Highlight>
                    <Text fontFamily="heading" color="gray.500" fontSize="md">
                      jul 21- jan 22
                    </Text>
                  </Flex>

                  <Text
                    padding={3}
                    color="slate300"
                    fontSize="md"
                    fontWeight="300"
                    letterSpacing="normal"
                    paddingBottom={3}
                    fontFamily="heading"
                    lineHeight="short"
                    as="p"
                  >
                    I worked on the creation of a MarketPlace aimed at solving
                    social problems together with a team using agile
                    methodologies (SCRUM), with a one-week sprint and
                    presentations to a product owner belonging to the staff.
                  </Text>
                  <Text
                    padding={3}
                    color="teal.100"
                    fontSize="md"
                    fontWeight="300"
                    letterSpacing="normal"
                    paddingBottom={3}
                    fontFamily="heading"
                    lineHeight="short"
                    as="p"
                  >
                    Stack : JavaScrip, Node, PostgresSQL,Express, React, Redux,
                    CSS Modules y Material UI.
                  </Text>
                </Box>
              </Flex>
            )}
            {isSelected === 40 && (
              <Flex alignItems="center">
                <Box padding={6}>
                  <Flex alignItems="center" gap={2}>
                    <Icon fontSize="20px" color="teal.200" as={FaCaretRight} />
                    <Highlight
                      fontSize="md"
                      query="Emerson automation Solutions"
                      styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "teal.200",
                      }}
                    >
                      Emerson automation Solutions
                    </Highlight>
                    <Text fontFamily="heading" color="gray.500" fontSize="md">
                      may 19- sep 21
                    </Text>
                  </Flex>

                  <Text
                    padding={3}
                    color="slate300"
                    fontSize="md"
                    fontWeight="300"
                    letterSpacing="normal"
                    paddingBottom={3}
                    fontFamily="heading"
                    lineHeight="short"
                    as="p"
                  >
                    Inside Sales associate - Oil and Gas Industry
                    -Responsibilities: make project quotes, monitor sales
                    processes, coordinate meetings with clients,
                    representatives, and internal sectors of the company for
                    project execution and / or definition of commercial
                    strategies.
                  </Text>
                </Box>
              </Flex>
            )}
            {isSelected === 50 && (
              <Flex alignItems="center">
                <Box padding={6}>
                  <Flex alignItems="center" gap={2}>
                    <Icon fontSize="20px" color="teal.200" as={FaCaretRight} />
                    <Highlight
                      fontSize="md"
                      query="Netzsch"
                      styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "teal.200",
                      }}
                    >
                      Netzsch
                    </Highlight>
                    <Text fontFamily="heading" color="gray.500" fontSize="md">
                      may 16- sep 19
                    </Text>
                  </Flex>

                  <Text
                    padding={3}
                    color="slate300"
                    fontSize="md"
                    fontWeight="300"
                    letterSpacing="normal"
                    paddingBottom={3}
                    fontFamily="heading"
                    lineHeight="short"
                    as="p"
                  >
                    Applications and Sales engineering - Oil and Gas Industry
                    -Responsibilities: Serve client portfolio by visiting
                    customers, engineering the equipment to be quoted, achieve
                    the established sales objectives.
                  </Text>
                </Box>
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Experience;
