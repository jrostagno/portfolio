import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonSecondary = ({ children, ...props }) => {
  return (
    <Button
      variant="ghost"
      display="flex"
      margin="auto"
      _hover={{
        color: "teal.900",
        bgColor: "teal.200",
        borderColor: "teal.600",
        trasition: "5000ms",
      }}
      border="1px solid"
      padding="20px 30px"
      fontSize="sm"
      color="teal200"
      borderColor="teal200"
      fontFamily="body"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonSecondary;
