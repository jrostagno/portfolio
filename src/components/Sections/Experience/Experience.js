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
    { name: "Sharecare", click: () => setIsSelected(4) },
    { name: "Sinapsis", click: () => setIsSelected(10) },
    { name: "Maslow", click: () => setIsSelected(20) },
    { name: "Foodarity", click: () => setIsSelected(30) },
    // { name: "Emerson", click: () => setIsSelected(40) },
    // { name: "Netzsch", click: () => setIsSelected(50) },
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
                date="aug 24-apr 25"
                description="Clau is a real estate marketplace that also offers an exclusive service for
brokers, allowing them to manage published properties, as well as their agents
and clients."
                stack="Next 14/15, Next Auth, React, TypeScript, SWR, Tailwinds, Shadcn/ui, Vercel, Hubspot, Typesense, Segment, Mapbox"
              />
            )}

            {isSelected === 4 && (
              <ExperienceDescription
                company="Sharecare"
                date="oct 24- ago 24"
                description="Wecare is a mobile and web application used by employees of a U.S.
company, which rewards users with points for completing healthy activities. It
also functions as a social network: users can add people to their circle, share
activities, post updates, comment, like, and chat."
                stack="TypeScript, React, Redux Toolkit, Context API, Mapbox, Styled-
components, Geolocation, Stripe, Material UI"
              />
            )}
            {isSelected === 10 && (
              <ExperienceDescription
                company="Sinapsis"
                date="sep 22- aug 24"
                description="Sinapsis is a software factory specialized in serverless applications, primarily
focused on building MVPs. I collaborated on various projects, including
Barmetrix (a measurement and management system for restaurants) and
IdealCrow (a CRM platform)."
                stack="TypeScript, React, TanStack Query, Zustand, GraphQL, Material UI"
              />
            )}
            {isSelected === 20 && (
              <ExperienceDescription
                company="Maslow"
                date="feb 22- jul 22"
                description="Maslow (a startup focused on employee compensation systems)
Contributed to the creation of the MVP and developed multiple features for
Maslow’s web application, utilizing JavaScript, React, Next.js, and TailwindCSS
to deliver scalable and user-friendly solutions."
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
            {/* {isSelected === 40 && (
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
            )} */}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Experience;
