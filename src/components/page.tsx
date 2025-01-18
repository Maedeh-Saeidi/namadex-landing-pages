import { useData } from "../context/DataContext";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
//@ts-expect-error some error
import "swiper/css";
//@ts-expect-error some error
import "swiper/css/pagination";
import { IPage } from "../types";
import { API_URL } from "../api/CONSTANTS";

export default function Page({
  page,
  onClose,
}: {
  page?: IPage;
  onClose: () => void;
}) {
  const { data } = useData();
  return (
    <Flex flexDir={"column"}>
      <Flex backgroundColor={"transparent"}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          // style={{ width: "100%", height: "100%" }}
        >
          {page?.images.map((img) => (
            <SwiperSlide style={{ position: "relative" }}>
              <Text
                fontSize={{ base: "5xl", md: "4xl" }}
                fontWeight={700}
                color={"#FFFFFF"}
                position={"absolute"}
                right={{ base: 10, md: 100 }}
                top={{ base: 5, md: 20 }}
              >
                {page.imageTitle}
              </Text>
              <Image
                height={{ base: "20rem", md: "30rem" }}
                width={"100%"}
                // height={"100%"}
                src={
                  API_URL +
                  `/api/v1/section/post/page/${page?.id}/image?imageName=${img}`
                }
                alt={`Image for page ${img}`}
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Flex flexDir={"column"}>
        <Flex
          textAlign={"right"}
          flexDir={"column"}
          padding={{ base: 5, md: 20 }}
          gap={{ base: 5, md: 10 }}
        >
          <Text
            fontSize={"4xl"}
            color={data?.[0].jsonColor.primaryColor}
            fontWeight={600}
          >
            {page?.title}
          </Text>
          <Text
            color={"#000000"}
            fontWeight={500}
            fontSize={{ base: "xs", md: "lg" }}
          >
            {page?.description}
          </Text>
        </Flex>
        <Flex paddingLeft={20} gap={2} alignItems={"center"}>
          <Button
            as="a"
            href={API_URL + `/api/v1/section/post/page/${page?.id}/paper`}
            target="_blank"
            download
            variant={"outline"}
            borderColor={data?.[0].jsonColor.primaryColor}
            borderWidth={2}
            padding={5}
          >
            دانلود سپیدنامه
          </Button>
          <Button
            colorScheme={data?.[0].jsonColor.primaryColor}
            onClick={onClose}
            variant={"outline"}
            borderColor={data?.[0].jsonColor.primaryColor}
            borderWidth={2}
            padding={5}
          >
            بستن
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
