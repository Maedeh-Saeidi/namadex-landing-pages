import { Flex, Image, Input, Stack, Button, Text, Box } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { IForm } from "../types";
import { useForm } from "react-hook-form";
import { usePostMessage } from "../hooks/usePostMessage";
import { useData } from "../context/dataContext";
import SocialMedia, { SocialLinks } from "./socialMedia";
import SectionButtons from "./sectionButtons";

export default function ContactUs() {
  const { data } = useData();

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
    <Flex
      height={"70vh"}
      backgroundColor={data?.[0].jsonColor.primaryColor}
      flexDir={"row"}
    >
      <Flex
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Image src="/images/email.png" boxSize={"53%"} />
        <SocialMedia />
        <SocialLinks />
      </Flex>
      <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
        <Flex flexDir={"column"} gap={20} flex={0.5} paddingTop={10}>
          <Text color={"#FFFFFF"} dir="rtl" fontWeight={600} fontSize={30}>
            با ما در ارتباط باشید
          </Text>
          <form onSubmit={onSubmit}>
            <Stack gap="4" maxW="xl">
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
                  {...register("message", { required: "message is required" })}
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
  );
}
