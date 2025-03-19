import React, { useState } from "react";
import AOS from "aos";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";

import { stylesButtonExperience } from "./stylesExperience";
import ExperienceDescription from "./ExperienceDescription";
import SectionDivider from "../../Divider/SectioDivider";

const Experience = () => {
  AOS.init();
  const [isSelected, setIsSelected] = useState(5);

  const experience = [
    { name: "Clau", click: () => setIsSelected(5) },
    { name: "Sinapsis", click: () => setIsSelected(10) },
    { name: "Maslow", click: () => setIsSelected(20) },
    { name: "Foodarity", click: () => setIsSelected(30) },
    { name: "Emerson", click: () => setIsSelected(40) },
    { name: "Netzsch", click: () => setIsSelected(50) },
  ];

  return (
    <Box
      id="experience"
      height="100vh"
      marginTop={20}
      paddingTop={40}
      paddingBottom={20}
      marginBottom={0}
    >
      <SectionDivider query="02." section="02. Dev Experience & more.." />
      <Box
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
        marginTop={20}
        marginX="auto"
        maxW="800px"
      >
        <Flex>
          <Stack spacing={0} borderLeft="1px solid" borderColor="gray.600">
            {experience.map((company) => (
              <Button
                paddingX={{ base: "10px", sm: "20px", md: "30px" }}
                paddingY={{ base: "10px", sm: "20px", md: "30px" }}
                sx={stylesButtonExperience}
                onClick={company.click}
                key={company.name}
              >
                {company.name}
              </Button>
            ))}
          </Stack>
          <Box padding="0px">
            {isSelected === 5 && (
              <ExperienceDescription
                company="Clau"
                date="aug 24- present"
                description="Clau is a real estate portal (marketplace), and has an exclusive service for real estate brokers, where their advisors can manage the published properties and their clients.
https://www.clau.com/"
                stack="Next 14/15, Next Auth, React, TypeScript, SWR, Tailwinds, Shadcn/ui, Vercel, Hubspot, Typesense, Segment, Mapbox"
              />
            )}
            {isSelected === 10 && (
              <ExperienceDescription
                company="Sinapsis"
                date="oct 22- aug 24"
                description="Sinapsis is a software factory dedicated to creating serverless applications. Position: Frontend developer"
                stack="Skills: TypeScript, React.js, Jira, Redux Toolkit, React Context, Material UI."
              />
            )}
            {isSelected === 20 && (
              <ExperienceDescription
                company="MASLOW"
                date="feb 22- jul 22"
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
                company="Foodarity APP"
                date="jul 21- feb 22"
                description="I worked on the creation of a MarketPlace aimed at solving social problems together with a team using agile methodologies (SCRUM), with a one-week sprint and presentations to a product owner belonging to the staff."
                stack="Stack : JavaScrip, Node, PostgresSQL,Express, React, Redux, CSS Modules y Material UI."
              />
            )}
            {isSelected === 40 && (
              <ExperienceDescription
                company="Emerson"
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
                date="may 14- sep 19"
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
