import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Project from "./project";
import { A11y, Pagination } from "swiper/modules";
import { useGetImage } from "../hooks/useGetImage";
import { useData } from "../context/dataContext";
import { IPost } from "../types";

export default function Projects() {
  const id = 2;
  const { data } = useData();
  const { status, imageData } = useGetImage({
    id,
    queryKey: ["sectionImage", id],
  });
  const imageUrl: string =
    status === "success"
      ? `${imageData.config.baseURL}${imageData.config.url}`
      : "";
  return (
    <Box
      // maxWidth={"100%"}
      backgroundImage={imageUrl}
      backgroundColor={data?.[0].jsonColor.secondaryColor}
      height={{ base: "70vh", md: "100vh" }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      // gap={30}
    >
      <Box
        overflow={"hidden"}
        flex={0.8}
        flexDir={"column"}
        textAlign={"center"}
        // display={"flex"}
      >
        <Text
          fontWeight={700}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl", "2xl": "5xl" }}
          color={"#4D4D4D"}
          paddingBottom={10}
        >
          پروژه ها
        </Text>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={40}
          pagination={{ clickable: true }}
          modules={[Pagination, A11y]}
        >
          {data?.[1].posts.map((post: IPost) => (
            <SwiperSlide key={post.id}>
              <Project post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
