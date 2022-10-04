import React from "react";
import { Box, Container } from "@chakra-ui/react";

import NavBar from "../Navbar/NavBar";

import IconsLinks from "../Links/IconsLinks";
import MailLinks from "../Links/MailLinks";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" style={{ minHeight: "100vh" }}>
      <NavBar></NavBar>
      <IconsLinks />
      <MailLinks />
      <Box
        as="main"
        marginX="auto"
        paddingY={{ base: "50px", md: "150px" }}
        paddingX="10px"
        style={{ margin: "auto" }}
        width="100%"
        maxWidth="1500px"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
