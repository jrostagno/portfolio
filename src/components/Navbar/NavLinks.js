import React from "react";
import { ListItem, OrderedList } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { stylesNavLinks } from "./stylesNavBar";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const NavLinks = ({ navLinks, onClose, ...props }) => {
  return (
    <>
      <OrderedList
        listStyleType="decimal"
        alignItems="center"
        gap={20}
        display="flex"
        // marginRight={10}
        justifyContent="space-between"
        {...props}
      >
        {navLinks.map((link) => (
          <ListItem
            fontSize="sm"
            _hover={{
              color: "teal200",
              transition: "300ms",
            }}
            key={link.name}
          >
            <Link
              as="button"
              onClick={onClose}
              smooth={true}
              offset={50}
              duration={500}
              sx={stylesNavLinks}
              to={link.href}
            >
              {link.name}
            </Link>
          </ListItem>
        ))}
        <ButtonPrimary
          as="a"
          target="_blank"
          href="https://drive.google.com/file/d/1K5w2q0Z_WrF_0pV2cwxCJY7Qp74ZbQAa/view"
        >
          Resume
        </ButtonPrimary>
      </OrderedList>
    </>
  );
};

export default NavLinks;
