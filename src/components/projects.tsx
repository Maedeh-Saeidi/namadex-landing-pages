import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./project";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { useGetImage } from "../hooks/useGetImage";
import { useData } from "../context/dataContext";

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
  console.log(data);
  return (
    <Box
      backgroundImage={imageUrl}
      height={"100vh"}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        // flex={1}
        backgroundColor={"red"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Swiper modules={[Virtual, Navigation, Pagination]}>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
          <SwiperSlide>
            <Project />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
