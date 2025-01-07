import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useGetAllSections } from "../hooks/useGetAllSections";
import { useGetImage } from "../hooks/useGetImage";

export function HeroSection() {
  const id: number = 1;
  const { isDataFetching, data } = useGetAllSections({
    enabled: true,
    queryKey: ["sections"],
  });
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
      flexDir={"row"}
      flex={1}
      height={"100vh"}
      backgroundColor={data?.[0].jsonColor.secondaryColor}
    >
      <Flex flex={1}>
        <Box position={"absolute"} left={-170} top={-4}>
          {isImageFetching ? (
            <Spinner color={data?.[0].jsonColor.primaryColor} />
          ) : status === "success" ? (
            <Image src={imageUrl} alt="hero page" boxSize={"80%"} />
          ) : (
            <Text>Failed to load image</Text>
          )}
        </Box>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"flex-end"}>
        {isDataFetching ? (
          <Spinner color={data?.[0].jsonColor.primaryColor} />
        ) : (
          <Flex alignItems="center" flexDir={"column"} flex={1}>
            <Flex flexDir={"column"} textAlign={"right"}>
              <Text
                color={data?.[0].jsonColor.primaryColor}
                fontWeight={600}
                fontSize={"5xl"}
              >
                نمادِکس
              </Text>
              <Text fontWeight={600} fontSize={"3xl"} color={"#363636"}>
                {data?.[0].title}
              </Text>
              <Text color={"#4D4D4D"} fontWeight={600} fontSize={"4xl"}>
                با ما به دنیای جدید کسب و کار بپیوندید
              </Text>
              <Text color={"#6A7875"} fontWeight={500} fontSize={"xl"}>
                {data?.[0].description}
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
