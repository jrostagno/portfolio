import React, { useEffect, useState } from "react";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

import Card from "../../Cards/Card";
import { projects } from "../../../lib/constants";
import SectionDivider from "../../Divider/SectioDivider";

const Work = () => {
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
      <SectionDivider query="03." section="03. Some work I have done" />
      <Grid templateColumns="repeat(2, 1fr)" gap={3} paddingY="10">
        {allProjects.map((project) => (
          <GridItem key={project.title} role="group">
            <Card
              img={project.img}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
            />
          </GridItem>
        ))}
      </Grid>
      {expanded ? (
        <Button onClick={() => showLess()} display="flex" margin="auto">
          Show Less
        </Button>
      ) : (
        <Button onClick={() => showMore()} display="flex" margin="auto">
          Show More
        </Button>
      )}
    </Box>
  );
};

export default Work;
