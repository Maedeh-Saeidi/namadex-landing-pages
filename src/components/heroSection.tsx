import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export function HeroSection() {
  return (
    <Flex flexDir={"row"} flex={1} height={"100vh"} backgroundColor={"#FFFCF7"}>
      <Flex flex={1}>
        <Box position={"absolute"} left={-170} top={-4}>
          <Image src="/images/herophoto.png" alt="hero page" boxSize={"80%"} />
        </Box>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"flex-end"}>
        <Flex alignItems="center" flexDir={"column"} flex={1}>
          <Flex flexDir={"column"} textAlign={"right"}>
            <Text color={"#1C549D"} fontWeight={600} fontSize={"5xl"}>
              نمادِکس
            </Text>
            <Text fontWeight={600} fontSize={"3xl"} color={"#363636"}>
              تامین مالی واحدهای معدنی و صنعتی
            </Text>
            <Text color={"#4D4D4D"} fontWeight={600} fontSize={"4xl"}>
              با ما به دنیای جدید کسب و کار بپیوندید
            </Text>
            <Text color={"#6A7875"} fontWeight={500} fontSize={"xl"}>
              قابلیت عرضه املاک، داراییهای کشاورزی و دیگر تولیدات شما
            </Text>
            <Text
              color={"#6A7875"}
              fontWeight={500}
              fontSize={"xl"}
              paddingBottom={"10"}
            >
              در شرکت ما
            </Text>
            <Flex flex={1} alignSelf={"flex-end"} paddingTop={"18%"}>
              <Button backgroundColor={"#1C549D"} color={"#FFFFFF"} padding={5}>
                !ثبت نام کنید
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
