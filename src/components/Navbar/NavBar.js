import { Box, Button, Link, ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";
import { stylesNavLinks } from "./stylesNavBar";

const NavBar = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Box
      as="nav"
      paddingLeft={20}
      paddingRight={20}
      paddingY={10}
      bgColor="navy"
      display="flex"
      fontFamily="heading"
      color="slate100"
      fontSize="sm"
      alignItems="center"
      justifyContent="end"
      gap="4"
    >
      <OrderedList
        listStyleType="decimal"
        gap={20}
        display="flex"
        justifyContent="space-between"
      >
        {navLinks.map((link) => (
          <ListItem
            _hover={{
              color: "teal.200",
              transition: "300ms",
            }}
            key={link.name}
          >
            <Link sx={stylesNavLinks} href={link.href}>
              {link.name}
            </Link>
          </ListItem>
        ))}
      </OrderedList>
      <Button
        as="a"
        target="_blank"
        href="https://drive.google.com/file/d/1K5w2q0Z_WrF_0pV2cwxCJY7Qp74ZbQAa/view"
        variant="outline"
        _hover={{
          bgColor: "navy",
          color: "teal.100",
          borderColor: "teal.100",
          transform: "scale(1.10)",
        }}
        border="1px solid"
        fontSize="sm"
        color="teal200"
        borderColor="teal200"
        fontFamily="body"
      >
        Resume
      </Button>
    </Box>
  );
};

export default NavBar;
