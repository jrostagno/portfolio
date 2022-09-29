import React from "react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
} from "@chakra-ui/react";

import Card from "../../Cards/Card";
import { projects } from "../../../lib/constants";

const Work = () => {
  return (
    <Box id="work" height="100vh" marginTop={20}>
      <Flex alignItems="center" gap="6">
        <Heading color="slate100" fontWeight="600">
          <Highlight
            query="03."
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.200" }}
          >
            03. Some work I have done
          </Highlight>
        </Heading>
        <Divider width="400px" borderColor={"teal.200"} />
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={3} paddingY="10">
        {projects.map((project) => (
          <GridItem role="group">
            <Card
              img={project.img}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
