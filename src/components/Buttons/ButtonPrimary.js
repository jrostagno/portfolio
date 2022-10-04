import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <Button
      variant="outline"
      _hover={{
        bgColor: "navy",
        color: "teal.100",
        borderColor: "teal.100",
        transform: "scale(1.10)",
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

export default ButtonPrimary;
