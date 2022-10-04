import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { contactLinks } from "../../lib/constants";

const IconsLinks = () => {
  return (
    <Box
      width="40px"
      position="fixed"
      bottom="0"
      left="40px"
      display={{ base: "none", md: "flex" }}
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
  );
};

export default IconsLinks;
