import React from "react";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";

import NavBar from "../Navbar/NavBar";
import { contactLinks } from "../../lib/constants";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" style={{ minHeight: "100vh" }}>
      <NavBar></NavBar>
      <Box
        width="40px"
        position="fixed"
        bottom="0"
        left="40px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
      >
        <UnorderedList
          margin="auto"
          listStyleType="none"
          fontSize="xl"
          spacing={12}
          marginBottom="20px"
        >
          {contactLinks.map((link) => (
            <ListItem
              _hover={{
                color: "teal.200",
                transform: "translateY(-30%)",
                transitionDelay: "400ms",
                transition: "300ms",
              }}
              key={link.href}
            >
              <Link
                target="_blank"
                _hover={{
                  color: "teal.200",
                }}
                href={link.href}
                color="slate100"
              >
                {link.icon}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Box height="120px" borderRight="1px" borderColor="slate100"></Box>
      </Box>
      <Box
        width="40px"
        position="fixed"
        bottom="0"
        right="40px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
      >
        <Link
          sx={{ writingMode: "vertical-lr" }}
          href="mailto:javier.rostagno@gmail.com"
          letterSpacing="0.2em"
          color="slate100"
          _hover={{
            textDecoration: "none",
            color: "teal.200",
            transform: "translateY(-10%)",
            transitionDelay: "400ms",
            transition: "800ms",
          }}
          fontSize="xs"
          textDecoration="none"
          fontFamily="heading"
        >
          javier.rostagno@gmail.com
        </Link>

        <Box height="120px" borderRight="1px" borderColor="slate100"></Box>
      </Box>
      <Box
        as="main"
        paddingX="150px"
        style={{ margin: "auto" }}
        width="100%"
        maxWidth="1500px"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
