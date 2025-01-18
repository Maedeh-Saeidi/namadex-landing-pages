import {
  Flex,
  Image,
  Input,
  Stack,
  Button,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { Field } from "./ui/field";
import { IForm, IUpdatedSection } from "../types";
import { useForm } from "react-hook-form";
import { usePostMessage } from "../hooks/usePostMessage";
import { useData } from "../context/DataContext";
import SocialMedia, { SocialLinks } from "./socialMedia";
import SectionButtons from "./sectionButtons";
import { API_URL } from "../api/CONSTANTS";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const { data } = useData();
  const [section, setSection] = useState<IUpdatedSection>();
  const sectionType = "OPERATION";

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

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const { handlePostMessage } = usePostMessage({
    onSuccess() {
      reset();
    },
  });
  const onSubmit = handleSubmit((data) => {
    handlePostMessage(data);
    reset();
  });

  return (
    <>
      {section ? (
        <Flex
          id="contactUs"
          height={{ base: "95vh", md: "70vh" }}
          backgroundColor={section.jsonColor.primaryColor}
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Flex
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Image
              src={API_URL + `/api/v1/section/3/image`}
              boxSize={{ base: "100%", md: 350, lg: "55%", "2xl": "60%" }}
            />
            <SocialMedia />
            <SocialLinks />
          </Flex>
          <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
            <Flex
              flexDir={"column"}
              gap={{ base: 10, md: 10 }}
              flex={{ base: 0.8, md: 0.1, lg: 0.5 }}
              paddingTop={10}
            >
              <Text
                color={"#FFFFFF"}
                dir="rtl"
                fontWeight={600}
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl", "2xl": "5xl" }}
              >
                با ما در ارتباط باشید
              </Text>
              <form onSubmit={onSubmit}>
                <Stack
                  gap="3"
                  maxW={{ base: "xl", md: "lg", lg: "xl", "2xl": "2xl" }}
                  // paddingLeft={{ base: 10, md: 0 }}
                >
                  <Field invalid={!!errors.email}>
                    <Input
                      color={"#999999"}
                      variant={"subtle"}
                      placeholder="ایمیل خود را وارد کنید"
                      dir="rtl"
                      {...register("email", { required: "email is required" })}
                    />
                  </Field>
                  <Field invalid={!!errors.message}>
                    <Input
                      dir="rtl"
                      color={"#999999"}
                      variant="subtle"
                      placeholder="متن پیام خود را بنویسید"
                      {...register("message", {
                        required: "message is required",
                      })}
                    />
                  </Field>
                  <Button
                    type="submit"
                    color={"#3EA98D"}
                    flex={1}
                    size={"xl"}
                    padding={2.5}
                  >
                    ارسال
                  </Button>
                </Stack>
              </form>
              <SectionButtons />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Spinner
          color="green"
          justifyContent={"center"}
          alignItems={"center"}
        />
      )}
    </>
  );
}
