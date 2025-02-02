import { Button, Flex } from "@chakra-ui/react";

export default function SectionButtons() {
  const links = [
    { title: "پروژه ها", href: "#projects" },
    { title: "داراییها", href: "https://namadex.ir/#Services" },
    { title: "درباره ی ما", href: "#heroSection" },
    { title: "ارتباط با ما", href: "#contactUs" },
  ];
  return (
    <Flex
      maxW={{ md: 300, lg: "5xl" }}
      flexDirection={"row"}
      gap={{ md: 0, lg: 2 }}
      display={{ base: "none", md: "flex" }}
    >
      {links.map((link) => (
        <ActionButtons key={link.title} title={link.title} href={link?.href} />
      ))}
    </Flex>
  );
}
export function ActionButtons({
  href,
  title,
}: {
  href?: string;
  title: string;
}) {
  return (
    <Button
      as="a"
      href={href}
      variant="plain"
      color="#FFFFFF"
      _hover={{ transform: "scale(1.1)" }}
      fontSize={{ md: "sm", lg: "sm", "2xl": "xl" }}
    >
      {title}
    </Button>
  );
}
