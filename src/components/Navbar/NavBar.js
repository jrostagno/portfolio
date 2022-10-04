import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import NavLinks from "./NavLinks";
import HamburgerMenue from "../Hamburger/HamburgerMenue";

const NavBar = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Work", href: "work" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <Box
      zIndex={10}
      ref={myRef}
      as="nav"
      paddingX={{ base: "10px", sm: "30px", md: "60px" }}
      paddingY={5}
      display="flex"
      fontFamily="heading"
      color="slate100"
      fontSize="sm"
      alignItems="center"
      bgGradient="linear(to-t,navy,blackAlpha.300)"
      position="fixed"
      visibility={`${isScrollDown ? "visible" : "hidden"}`}
      width="100%"
      justifyContent="end"
      gap="4"
      {...props}
    >
      <NavLinks display={{ base: "none", md: "flex" }} navLinks={navLinks} />
      <HamburgerMenue
        onClose={onClose}
        onOpen={onOpen}
        btnRef={btnRef}
        isOpen={isOpen}
        content={
          <NavLinks
            onClose={onClose}
            marginTop="60px"
            color="slate300"
            justifyContent="center"
            alignItems="center"
            navLinks={navLinks}
            flexDirection="column"
          />
        }
      />
    </Box>
  );
};

export default NavBar;
