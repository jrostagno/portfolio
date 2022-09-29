import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Highlight,
  Stack,
} from "@chakra-ui/react";

import { stylesButtonExperience } from "./stylesExperience";
import ExperienceDescription from "./ExperienceDescription";

const Experience = () => {
  const [isSelected, setIsSelected] = useState(20);

  const experience = [
    { name: "Maslow", click: () => setIsSelected(20) },
    { name: "Foodarity", click: () => setIsSelected(30) },
    { name: "Emerson", click: () => setIsSelected(40) },
    { name: "Netzsch", click: () => setIsSelected(50) },
  ];

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
            {experience.map((company) => (
              <Button
                sx={stylesButtonExperience}
                onClick={company.click}
                key={company.name}
              >
                {company.name}
              </Button>
            ))}
          </Stack>
          <Box>
            {isSelected === 20 && (
              <ExperienceDescription
                company="MASLOW"
                date="jan 22- jul 22"
                description="Frontend Developer - Maslow is a start-up dedicated to
                offering company services, focused on their employees
                compensation systems. MVP creation, and development of
                different features for Maslow web application."
                stack="Skills: Storybooks · Trello · Kanban · Next.js · JavaScript
                · React.js · Tailwind CSS"
              />
            )}
            {isSelected === 30 && (
              <ExperienceDescription
                company="Foodarity APP -[Academic project]"
                date="jul 21- jan 22"
                description="I worked on the creation of a MarketPlace aimed at solving social problems together with a team using agile methodologies (SCRUM), with a one-week sprint and presentations to a product owner belonging to the staff."
                stack="Stack : JavaScrip, Node, PostgresSQL,Express, React, Redux, CSS Modules y Material UI."
              />
            )}
            {isSelected === 40 && (
              <ExperienceDescription
                company="Emerson automation Solutions"
                date="may 19- sep 21"
                description=" Inside Sales associate - Oil and Gas Industry
                -Responsibilities: make project quotes, monitor sales
                processes, coordinate meetings with clients,
                representatives, and internal sectors of the company for
                project execution and / or definition of commercial
                strategies."
              />
            )}
            {isSelected === 50 && (
              <ExperienceDescription
                company=" Netzsch"
                date="may 16- sep 19"
                description="Applications and Sales engineering - Oil and Gas Industry
                -Responsibilities: Serve client portfolio by visiting
                customers, engineering the equipment to be quoted, achieve
                the established sales objectives."
              />
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Experience;
