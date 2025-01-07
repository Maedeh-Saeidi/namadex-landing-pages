import { useMutation } from "@tanstack/react-query";
import { request_contact } from "../api/request";
import { IForm, IProps } from "../types";
import { useToast } from "@chakra-ui/react";

export function usePostMessage({ onSuccess, onError }: IProps) {
  const toast = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IForm) => request_contact(data),
    onSuccess(resp) {
      if (resp?.status === 201) {
        if (onSuccess) onSuccess(resp);
        toast({
          status: "success",
          description: "با موفقیت ارسال شد",
          position: "top-right",
        });
      } else {
        toast({
          status: "error",
          description: "ارسال پیام با خطا مواجه شد",
          position: "top-right",
        });
      }
    },
    onError(error) {
      if (onError) onError(error);
    },
  });
  return {
    isMessagePosting: isPending,
    handlePostMessage: mutate,
  };
}
