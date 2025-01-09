import { Flex, Text } from "@chakra-ui/react";
import CustomeButton from "./customeButton";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

export default function SocialMedia() {
  return (
    <Flex flexDir={"row"} gap={2} paddingTop={30}>
      <CustomeButton
        icon={<FaWhatsapp color="#FFFFFF" />}
        href="https://wa.me/989126846896"
      />
      <CustomeButton
        icon={<FaTelegramPlane color="#FFFFFF" />}
        href="https://web.telegram.org/a/#6730076446"
      />
      <CustomeButton
        icon={<FaInstagram color="#FFFFFF" />}
        href="https://www.instagram.com/namadex.ir?utm_source=qr&igsh=dXFxMXZpaWUxb3Rw"
      />
      <CustomeButton
        icon={<FaFacebookF color="#FFFFFF" />}
        href="https://www.facebook.com/profile.php?id=61556810630019&mibextid=ZbWKwL"
      />
      <CustomeButton
        icon={<FaYoutube color="#FFFFFF" />}
        href="https://youtube.com/@Namadex?si=s2dZ4CeCY97NjcJj"
      />
      <CustomeButton
        icon={<FiAtSign color="#FFFFFF" />}
        href="mailto:Namadex.ir@gmail.com"
      />
    </Flex>
  );
}
export function SocialLinks() {
  return (
    <Flex
      flexDir={"column"}
      gap={0}
      textAlign={"center"}
      paddingTop={30}
      textColor={"#FFFFFF"}
    >
      <Text
        as={"a"}
        href="mailto:Namadex.ir@gmail.com"
        transition="all 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        Namadex.ir@gmail.com
      </Text>
      <Text
        as={"a"}
        href="tel:02188424516"
        transition="all 0.2s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        02188424516
      </Text>
    </Flex>
  );
}
