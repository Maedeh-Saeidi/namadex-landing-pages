import { useState } from "react";
import { useData } from "../context/DataContext";
import {
  Button,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CloseIcon } from "@chakra-ui/icons";
//@ts-expect-error some error
import "swiper/css";
//@ts-expect-error some error
import "swiper/css/navigation";
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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsFullScreen(true);
  };

  return (
    <Flex flexDir={"column"}>
      <Flex backgroundColor={data?.[0].jsonColor.primaryColor}>
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination, Navigation]}
        >
          {page?.images.map((img, index) => (
            <SwiperSlide key={img}>
              <Flex
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
              >
                <Image
                  bgPosition={"center"}
                  maxHeight={{ base: "25rem", md: "30rem" }}
                  src={`${API_URL}/api/v1/section/post/page/${page?.id}/image?imageName=${img}`}
                  alt={`Image for page ${img}`}
                  onClick={() => handleImageClick(index)}
                  cursor="pointer"
                />
                <Text
                  fontSize={{ base: "5xl", md: "4xl" }}
                  fontWeight={700}
                  color={"#FFFFFF"}
                  position={"absolute"}
                  top={10}
                  right={10}
                >
                  {page.imageTitle}
                </Text>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
      <Modal
        isOpen={isFullScreen}
        onClose={() => setIsFullScreen(false)}
        size="full"
      >
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalBody>
            <IconButton
              aria-label="Close full-screen"
              icon={<CloseIcon />}
              onClick={() => setIsFullScreen(false)}
              position="absolute"
              top={4}
              right={4}
              zIndex={10}
            />
            <Swiper
              initialSlide={selectedImageIndex}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              modules={[Pagination, Navigation]}
            >
              {page?.images.map((img) => (
                <SwiperSlide key={img}>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                  >
                    <Image
                      src={`${API_URL}/api/v1/section/post/page/${page?.id}/image?imageName=${img}`}
                      alt={`Full-screen image for page ${img}`}
                      maxH="100%"
                      maxW="100%"
                      objectFit="contain"
                    />
                  </Flex>
                </SwiperSlide>
              ))}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
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
            href={`${API_URL}/api/v1/section/post/page/${page?.id}/paper`}
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
            بازگشت
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
