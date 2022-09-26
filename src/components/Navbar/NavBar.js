import { Box, Button, Link, ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
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
        <ListItem>
          <Link className="item">About</Link>
        </ListItem>
        <ListItem>
          <Link>Experience</Link>
        </ListItem>
        <ListItem>
          <Link>Work</Link>
        </ListItem>
        <ListItem>
          <Link>Contact</Link>
        </ListItem>
      </OrderedList>
      <Button
        variant="outline"
        bgColor="navy"
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
