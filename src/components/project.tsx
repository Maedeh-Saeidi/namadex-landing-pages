import { Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { API_URL } from "../api/CONSTANTS";
import { IPost, IPage } from "../types";
import { useData } from "../context/DataContext";
import Page from "./page";
import { useState } from "react";
import FullPageDialog from "./fullPageDialog";

export default function Project({
  post,
  index,
}: {
  post: IPost;
  index: number;
}) {
  const { data, isDataFetching } = useData();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const borderColor: string =
    index % 2 === 0 ? data?.[0].jsonColor.primaryColor : "transparent";
  const borderWidth: number = index % 2 === 0 ? 2 : 0;
  const paddingTop = index % 2 === 0 ? { base: 0, md: 20, lg: 20 } : 0;

  const handleOpenDialog = (page?: IPage) => {
    if (page !== null) setIsDialogOpen(true);
  };
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Flex
        as={"button"}
        onClick={() => handleOpenDialog(post?.page)}
        rounded={"3xl"}
        maxW={{ base: 300, md: 400, lg: 460, "2xl": 600 }}
        paddingTop={paddingTop}
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
            borderColor={borderColor}
            borderWidth={borderWidth}
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
      <FullPageDialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
        <Page page={post.page} onClose={handleCloseDialog} />
      </FullPageDialog>
    </>
  );
}
