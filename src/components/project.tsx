import { Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { API_URL } from "../api/CONSTANTS";
import { IPost } from "../types";
import { useData } from "../context/dataContext";

export default function Project({ post }: { post: IPost }) {
  const { data, isDataFetching } = useData();
  return (
    <Flex
      rounded={"3xl"}
      maxW={{ base: 300, md: 400, lg: 460, "2xl": 600 }}
      paddingTop={post.id === 2 ? { base: 0, md: 20, lg: 20 } : 0}
    >
      {isDataFetching ? (
        <Spinner color={data?.[0].jsonColor.primaryColor} />
      ) : (
        <Flex
          flexDir={"column"}
          backgroundColor={"#FFFFFF"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          rounded={"3xl"}
          borderColor={data?.[0].jsonColor.primaryColor}
          borderWidth={post.id === 2 ? 2 : 0}
        >
          <Image
            src={API_URL + `/api/v1/section/post/${post.id}/image`}
            alt="project's page"
            boxSize={"100%"}
          />
          <Image
            paddingTop={10}
            src={API_URL + `/api/v1/section/post/${post.id}/icon`}
            width={"100"}
          ></Image>
          <Text
            fontWeight={600}
            fontSize={{ base: "sm", md: "xl", "2xl": "3xl" }}
          >
            {post.title}
          </Text>
          <Text
            fontWeight={400}
            fontSize={{ base: "xs", md: "lg", "2xl": "2xl" }}
            paddingBottom={8}
          >
            {post.link}
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
