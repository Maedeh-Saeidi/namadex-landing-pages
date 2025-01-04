import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useGetAllSections } from "../hooks/useGetAllSections";
import { useGetImage } from "../hooks/useGetImage";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [enableImageApi, setEnabelImageApi] = useState<boolean>(false);
  const id: number = 1;
  const { isFetching, data } = useGetAllSections({
    enabled: true,
    queryKey: ["sections"],
  });
  useEffect(() => {
    if (data?.[0].hasImage) setEnabelImageApi(true);
  }, [data]);

  const { image, isImageFetching, status } = useGetImage({
    id,
    queryKey: ["sectionImage", id],
    enabled: enableImageApi,
    onSuccess: (imageData) => {
      console.log("Image data loaded successfully:", imageData);
      setEnabelImageApi(false);
    },
    onError: (error) => {
      console.error("Error fetching image data:", error);
    },
  });
  console.log(image);
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
