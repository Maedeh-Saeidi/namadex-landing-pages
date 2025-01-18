import { useData } from "../context/DataContext";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
//@ts-expect-error some error
import "swiper/css";
//@ts-expect-error some error
import "swiper/css/pagination";

export default function Page() {
  const pageId:number = 21;
  const { data } = useData();
  console.log(data);
  //get your data from the parent page
  return (
    <Flex flex={1} height={"100vh"} flexDir={"column"}>
      <Flex flex={1} backgroundColor={"pink"}>
        <>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </>
      </Flex>
      <Flex
        flex={1}
        // backgroundColor={"blue"}
        flexDir={"column"}
      >
        <Flex textAlign={"right"} flexDir={"column"} padding={20} gap={10}>
          <Text
            fontSize={"5xl"}
            color={data?.[0].jsonColor.primaryColor}
            fontWeight={600}
          >
            شرکت جالیزان
          </Text>
          <Text color={"#000000"} fontWeight={500}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد
          </Text>
        </Flex>
        <Box paddingLeft={20}>
          <Button
            as="a"
            href={`https://api.namadex.ir/api/v1/section/post/page/${pageId}/paper`}
            target="_blank"
            download
            variant={"outline"}
            borderColor={data?.[0].jsonColor.primaryColor}
            borderWidth={2}
            padding={5}
          >
            مشاهده نقشه
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
