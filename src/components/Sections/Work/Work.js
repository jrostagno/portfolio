import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import Card from "../../Cards/Card";
import { projects } from "../../../lib/constants";
import SectionDivider from "../../Divider/SectioDivider";

import ButtonSecondary from "../../Buttons/ButtonSecondary";

const Work = () => {
  AOS.init();
  const [allProjects, setAllProjects] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setAllProjects(projects.slice(0, 4));
  }, []);

  const showMore = () => {
    setAllProjects(projects);
    setExpanded(true);
  };

  const showLess = () => {
    setAllProjects(projects.slice(0, 4));
    setExpanded(false);
  };

  return (
    <Box id="work" paddingTop={40}>
      <SectionDivider query="03." section="03. Some work I've done" />
      <Grid
        data-aos="fade-up"
        data-aos-duration="2000"
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        // templateColumns={{ sm: "450px", md: "450px 450px" }}
        transition="3000ms"
        justifyContent="center"
        gap={2}
        paddingY="10"
      >
        {allProjects.map((project) => (
          <GridItem key={project.title} role="group">
            <Card
              img={project.img}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              stack={project.stack}
              url={project.url}
              github={project.github}
            />
          </GridItem>
        ))}
      </Grid>
      {expanded ? (
        <ButtonSecondary onClick={() => showLess()}>Show Less</ButtonSecondary>
      ) : (
        <ButtonSecondary onClick={() => showMore()}>Show More</ButtonSecondary>
      )}
    </Box>
  );
};

export default Work;
