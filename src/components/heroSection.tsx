import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useData } from "../context/DataContext";
import { useGetImage } from "../hooks/useGetImage";
import { useEffect, useState } from "react";
import { IUpdatedSection } from "../types";

export function HeroSection() {
  const { data, isDataFetching } = useData();
  const [queryKey, setQueryKey] = useState<any[]>([]);
  const [section, setSection] = useState<IUpdatedSection>();
  const sectionType = "ABOUT";

  useEffect(() => {
    if (data?.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].sectionType === sectionType) {
          setSection(data[i]);
          break;
        }
      }
    }
  }, [data]);
  useEffect(() => {
    if (section) setQueryKey(["sectionImage", section.id]);
  }, [section]);

  const { isImageFetching, status, imageData } = useGetImage({
    id: section?.id,
    queryKey: queryKey,
  });
  const imageUrl: string =
    status === "success"
      ? `${imageData.config.baseURL}${imageData.config.url}`
      : "";
  return (
    <>
      {section ? (
        <Flex
          padding={10}
          id="heroSection"
          flexDir={{ base: "column", md: "column", lg: "row" }}
          flex={1}
          height={{ base: "100vh", md: "100vh", "2xl": "100vh" }}
          backgroundColor={section.jsonColor.secondaryColor}
        >
          <Flex flex={1}>
            <Box position={"absolute"} left={-120} top={-4}>
              {isImageFetching ? (
                <Spinner color={section.jsonColor.primaryColor} />
              ) : status === "success" ? (
                <Image
                  src={imageUrl}
                  alt="hero page"
                  boxSize={{ base: "90%", md: "80%", "2xl": "90%" }}
                />
              ) : (
                <Text>لطفا مجدد بارگزاری کنید</Text>
              )}
            </Box>
          </Flex>
          <Flex flex={1} alignItems="center" justifyContent={"flex-end"}>
            {isDataFetching ? (
              <Spinner color={section.jsonColor.primaryColor} />
            ) : (
              <Flex
                alignItems={{ base: "center", md: "flex-end", lg: "center" }}
                paddingRight={{ base: 0, md: 10, lg: 0 }}
                flexDir={"column"}
                flex={1}
              >
                <Flex flexDir={"column"} textAlign={"right"}>
                  <Text
                    color={section.jsonColor.primaryColor}
                    fontWeight={600}
                    fontSize={{
                      base: "4xl",
                      md: "4xl",
                      lg: "5xl",
                      "2xl": "6xl",
                    }}
                  >
                    نمادِکس
                  </Text>
                  <Text
                    fontWeight={600}
                    fontSize={{ base: "2xl", md: "2xl" }}
                    color={"#363636"}
                  >
                    {section.title}
                  </Text>
                  <Text
                    color={"#4D4D4D"}
                    fontWeight={600}
                    fontSize={{ base: "xl", md: "2xl" }}
                  >
                    با ما به دنیای جدید کسب و کار بپیوندید
                  </Text>
                  <Text
                    color={"#6A7875"}
                    fontWeight={500}
                    fontSize={{ base: "xs", md: "lg", "2xl": "2xl" }}
                  >
                    {section.description}
                  </Text>
                  <Text
                    color={"#6A7875"}
                    fontWeight={500}
                    fontSize={{ base: "xs", md: "lg", "2xl": "2xl" }}
                    paddingBottom={"10"}
                  >
                    در شرکت ما
                  </Text>
                  <Flex
                    flex={1}
                    alignSelf={"flex-end"}
                    paddingTop={{ base: 0, md: "10%" }}
                  >
                    <Button
                      as="a"
                      href="https://app.namadex.ir/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      backgroundColor={section.jsonColor.primaryColor}
                      color={"#FFFFFF"}
                      padding={5}
                    >
                      وارد اپلیکیشن شوید
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      ) : (
        <Spinner
          color="green"
          justifyContent={"center"}
          alignItems={"center"}
        />
      )}
    </>
  );
}
