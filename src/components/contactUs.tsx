import { Flex, Image, Input, Stack, Button, Text } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { IForm } from "../types";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Flex height={"70vh"} backgroundColor={"#1C549D"} flexDir={"row"}>
      <Flex flex={1} alignItems={"center"} justifyContent={"center"}>
        <Image src="/images/email.png" boxSize={"53%"} />
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
        </Flex>
      </Flex>
    </Flex>
  );
}
