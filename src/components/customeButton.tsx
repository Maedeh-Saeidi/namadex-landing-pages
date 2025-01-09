import React from "react";
import { Button, Box } from "@chakra-ui/react";

interface IconButtonProps {
  icon: React.ReactNode;
  href: string;
}

const CustomeButton: React.FC<IconButtonProps> = ({ icon, href }) => {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      rounded="full"
      borderWidth={1}
      borderColor="#FFFFFF"
      w="40px"
      h="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.1)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box fontSize={["15px", "20px", "20px"]}>{icon}</Box>
    </Button>
  );
};

export default CustomeButton;
