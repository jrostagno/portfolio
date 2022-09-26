import React from "react";
import { Box, Icon, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
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
          spacing={10}
        >
          <ListItem>
            <Link>
              <Icon color="secondary" as={FaGithub} />
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Icon color="secondary" as={FaTwitter} />
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Icon color="secondary" as={FaInstagram} />
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Icon color="secondary" as={FaLinkedinIn} />
            </Link>
          </ListItem>
        </UnorderedList>
        <Box height="120px" borderRight="1px" borderColor="secondary"></Box>
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
          letterSpacing="0.2em"
          color="secondary"
          fontSize="xs"
          textDecoration="none"
          fontFamily="heading"
        >
          javier.rostagno@gmail.com
        </Link>

        <Box height="120px" borderRight="1px" borderColor="secondary"></Box>
      </Box>
      <Box as="main">{children}</Box>
      <Footer></Footer>
    </Box>
  );
};

export default Layout;
