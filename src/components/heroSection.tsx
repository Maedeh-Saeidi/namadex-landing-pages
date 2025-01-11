import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useData } from "../context/DataContext";
import { useGetImage } from "../hooks/useGetImage";

export function HeroSection() {
  const id: number = 1;
  const { data, isDataFetching } = useData();
  const { isImageFetching, status, imageData } = useGetImage({
    id,
    queryKey: ["sectionImage", id],
  });
  const imageUrl: string =
    status === "success"
      ? `${imageData.config.baseURL}${imageData.config.url}`
      : "";
  return (
    <Flex
      id="heroSection"
      flexDir={{ base: "column", md: "column", lg: "row" }}
      flex={1}
      height={{ base: "100vh", md: "100vh", "2xl": "100vh" }}
      backgroundColor={data?.[0].jsonColor.secondaryColor}
    >
      <Flex flex={1}>
        <Box position={"absolute"} left={-170} top={-4}>
          {isImageFetching ? (
            <Spinner color={data?.[0].jsonColor.primaryColor} />
          ) : status === "success" ? (
            <Image
              src={imageUrl}
              alt="hero page"
              boxSize={{ base: "100%", md: "80%", "2xl": "90%" }}
            />
          ) : (
            <Text>لطفا مجدد بارگزاری کنید</Text>
          )}
        </Box>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"flex-end"}>
        {isDataFetching ? (
          <Spinner color={data?.[0].jsonColor.primaryColor} />
        ) : (
          <Flex
            alignItems={{ base: "center", md: "flex-end", lg: "center" }}
            paddingRight={{ base: 0, md: 10, lg: 0 }}
            flexDir={"column"}
            flex={1}
          >
            <Flex flexDir={"column"} textAlign={"right"}>
              <Text
                color={data?.[0].jsonColor.primaryColor}
                fontWeight={600}
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl", "2xl": "7xl" }}
              >
                نمادِکس
              </Text>
              <Text
                fontWeight={600}
                fontSize={{ base: "2xl", md: "3xl" }}
                color={"#363636"}
              >
                {data?.[0].title}
              </Text>
              <Text
                color={"#4D4D4D"}
                fontWeight={600}
                fontSize={{ base: "xl", md: "4xl" }}
              >
                با ما به دنیای جدید کسب و کار بپیوندید
              </Text>
              <Text
                color={"#6A7875"}
                fontWeight={500}
                fontSize={{ base: "sm", md: "xl", "2xl": "2xl" }}
              >
                {data?.[0].description}
              </Text>
              <Text
                color={"#6A7875"}
                fontWeight={500}
                fontSize={{ base: "sm", md: "xl", "2xl": "2xl" }}
                paddingBottom={"10"}
              >
                در شرکت ما
              </Text>
              <Flex
                flex={1}
                alignSelf={"flex-end"}
                paddingTop={{ base: "5%", md: "18%" }}
              >
                <Button
                  backgroundColor={data?.[0].jsonColor.primaryColor}
                  color={"#FFFFFF"}
                  padding={5}
                >
                  !ثبت نام کنید
                </Button>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
