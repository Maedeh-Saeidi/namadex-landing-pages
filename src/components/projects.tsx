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
      backgroundImage={imageUrl}
      backgroundColor={data?.[0].jsonColor.secondaryColor}
      height="100vh"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      gap={30}
    >
      <Box
        flex={0.8}
        flexDir={"column"}
        textAlign={"center"}
        // display={"flex"}
      >
        <Text
          fontWeight={700}
          fontSize={40}
          color={"#4D4D4D"}
          paddingBottom={10}
        >
          پروژه ها
        </Text>
        <Swiper
          slidesPerView={3}
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
