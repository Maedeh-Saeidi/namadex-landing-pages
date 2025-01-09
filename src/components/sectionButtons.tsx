import { Button, Flex } from "@chakra-ui/react";

export default function SectionButtons() {
  const links = [
    { title: "سرویس ها", href: "/services" },
    { title: "داراییها", href: "/assets" },
    { title: "درباره ی ما", href: "/about" },
    { title: "ارتباط با ما" },
  ];
  return (
    <Flex flexDirection={"row"} gap={2}>
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
    >
      {title}
    </Button>
  );
}
