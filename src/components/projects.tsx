import { Box, Spinner, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./project";
import { A11y, Pagination } from "swiper/modules";
import { useGetImage } from "../hooks/useGetImage";
import { useData } from "../context/DataContext";
import { IPost, IUpdatedSection } from "../types";
//@ts-expect-error some error
import "swiper/css";
//@ts-expect-error some error
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function Projects() {
  const { data } = useData();
  const [section, setSection] = useState<IUpdatedSection>();
  const [queryKey, setQuerykey] = useState<any[]>([]);
  const sectionType = "PROJECT";

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
    if (section) setQuerykey(["sectionImage", section.id]);
  }, [section]);

  const { status, imageData } = useGetImage({
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
        <Box
          id="projects"
          // maxWidth={"100%"}
          backgroundImage={imageUrl}
          backgroundColor={section.jsonColor.secondaryColor}
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
              fontSize={{ base: "2xl", md: "3xl", lg: "3xl", "2xl": "5xl" }}
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
              {section.posts.map((post: IPost, index: number) => (
                <SwiperSlide key={post.id}>
                  <Project post={post} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      ) : (
        <Spinner color="green" />
      )}
    </>
  );
}
