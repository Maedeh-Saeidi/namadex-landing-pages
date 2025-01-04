import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./project";
import { Navigation, Pagination, Virtual } from "swiper/modules";

export default function Projects() {
  return (
    <Box
      backgroundImage="url('/images/background.png')"
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
