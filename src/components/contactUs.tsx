import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function ContactUs() {
  return (
    <Flex height={"70vh"} backgroundColor={"#1C549D"} flexDir={"row"}>
      <Flex flex={1} alignItems={"center"} justifyContent={"center"}>
        <Image src="/images/email.png" boxSize={"70%"} />
      </Flex>
      <Flex flex={1} backgroundColor={"lightblue"}></Flex>
    </Flex>
  );
}
