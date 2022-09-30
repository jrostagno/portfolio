import { Box, Button, Link, ListItem, OrderedList } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { stylesNavLinks } from "./stylesNavBar";
import styles from "./NavBar.module.css";

const NavBar = ({ ...props }) => {
  const myRef = useRef();

  const [isScrollDown, setIsScrollDown] = useState(true);
  const [navIsOnTop, setNavIsOnTop] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];

  //     // if (entry.isVisible) {
  //     //   setIsIntersected(false);
  //     // } else {
  //     //   setIsIntersected(true);
  //     // }
  //     console.log("ENTRYYYY", entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);

  let currentPosition = window.pageYOffset;

  window.onscroll = function () {
    let nextPosition = window.pageYOffset;
    if (currentPosition >= nextPosition) {
      setIsScrollDown(true);
      setNavIsOnTop(true);
    } else {
      setIsScrollDown(false);

      currentPosition = nextPosition;
    }
  };
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Box
      zIndex={10}
      ref={myRef}
      className={styles.nav}
      as="nav"
      paddingLeft={20}
      paddingRight={20}
      paddingY={10}
      bgColor={`${navIsOnTop ? "blackAlpha.300" : "navy"}`}
      display="flex"
      fontFamily="heading"
      color="slate100"
      fontSize="sm"
      alignItems="center"
      position="fixed"
      top={`${isScrollDown ? "0" : "-100"}`}
      width="100%"
      justifyContent="end"
      gap="4"
      {...props}
    >
      <OrderedList
        listStyleType="decimal"
        gap={20}
        marginRight={10}
        display="flex"
        justifyContent="space-between"
      >
        {navLinks.map((link) => (
          <ListItem
            fontSize="lg"
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
        padding="25px 40px"
        fontSize="lg"
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
