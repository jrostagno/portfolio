import { Box, Image } from "@chakra-ui/react";
import React from "react";
import loader from "../../assets/rocket1.gif";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      alignItems="center"
      bgColor="navy"
    >
      <Image width="300px" src={loader} />
    </Box>
  );
};

export default Loader;
