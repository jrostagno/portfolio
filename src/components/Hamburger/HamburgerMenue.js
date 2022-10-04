import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";

const HamburgerMenue = ({ content, isOpen, onOpen, onClose, btnRef }) => {
  return (
    <div>
      <Box
        as="button"
        display={{ base: "block", md: "none" }}
        ref={btnRef}
        onClick={onOpen}
      >
        <Icon color="teal.200" fontSize="5xl" as={BiMenuAltRight} />
      </Box>
      <Drawer
        zIndex="40"
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="teal.200" fontSize="xl" />

          <DrawerBody bgColor="navy">{content}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HamburgerMenue;
