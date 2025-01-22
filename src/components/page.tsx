import { useState } from 'react'
import { useData } from '../context/DataContext'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
//@ts-expect-error some error
import 'swiper/css'
//@ts-expect-error some error
import 'swiper/css/pagination'
//@ts-expect-error some error
import 'swiper/css/navigation'
import { IPage } from '../types'
import { API_URL } from '../api/CONSTANTS'

export default function Page({
  page,
  onClose,
}: {
  page?: IPage
  onClose: () => void
}) {
  const { data } = useData()
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState('')

  const handleImageClick = (img: string) => {
    setIsFullScreen(!isFullScreen)
    setFullScreenImage(img)
  }

  return (
    <Flex flexDir={'column'}>
      <Flex backgroundColor={data?.[0].jsonColor.primaryColor}>
        <Swiper
          effect={'coverflow'}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination, Navigation]}
        >
          {page?.images.map((img) => (
            <SwiperSlide key={img}>
              <Flex
                width={'100%'}
                height={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
              >
                <Flex position={'relative'}>
                  <Image
                    bgPosition={'center'}
                    maxHeight={{ base: '25rem', md: '30rem' }}
                    src={
                      API_URL +
                      `/api/v1/section/post/page/${page?.id}/image?imageName=${img}`
                    }
                    alt={`Image for page ${img}`}
                    onClick={() => handleImageClick(img)}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                  <Text
                    fontSize={{ base: '5xl', md: '4xl' }}
                    fontWeight={700}
                    color={'#FFFFFF'}
                    top={10}
                    right={10}
                    position={'absolute'}
                  >
                    {page.imageTitle}
                  </Text>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

      {isFullScreen && (
        <Flex
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          backgroundColor="rgba(0, 0, 0, 0.9)"
          zIndex={9999}
          justifyContent="center"
          alignItems="center"
          onClick={() => setIsFullScreen(false)}
        >
          <Image
            src={
              API_URL +
              `/api/v1/section/post/page/${page?.id}/image?imageName=${fullScreenImage}`
            }
            alt={`Full-screen image for page ${fullScreenImage}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </Flex>
      )}

      <Flex flexDir={'column'}>
        <Flex
          textAlign={'right'}
          flexDir={'column'}
          padding={{ base: 5, md: 20 }}
          gap={{ base: 5, md: 10 }}
        >
          <Text
            fontSize={'4xl'}
            color={data?.[0].jsonColor.primaryColor}
            fontWeight={600}
          >
            {page?.title}
          </Text>
          <Text
            color={'#000000'}
            fontWeight={500}
            fontSize={{ base: 'xs', md: 'lg' }}
          >
            {page?.description}
          </Text>
        </Flex>
        <Flex paddingLeft={20} gap={2} alignItems={'center'}>
          <Button
            as="a"
            href={API_URL + `/api/v1/section/post/page/${page?.id}/paper`}
            target="_blank"
            download
            variant={'outline'}
            borderColor={data?.[0].jsonColor.primaryColor}
            borderWidth={2}
            padding={5}
          >
            دانلود سپیدنامه
          </Button>
          <Button
            colorScheme={data?.[0].jsonColor.primaryColor}
            onClick={onClose}
            variant={'outline'}
            borderColor={data?.[0].jsonColor.primaryColor}
            borderWidth={2}
            padding={5}
          >
            بستن
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
