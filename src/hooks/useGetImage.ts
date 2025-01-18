import { useToast } from "@chakra-ui/react";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { request_getsection_image } from "../api/request";

interface IProps {
  onSuccess?: (resp?: any) => void;
  onError?: (resp?: unknown) => void;
  enabled?: boolean;
  queryKey?: any[];
  id?: number;
}

export function useGetImage({
  onSuccess,
  onError,
  enabled,
  queryKey,
  id,
}: IProps) {
  const toast = useToast();
  const { isFetching, data, status } = useQuery({
    queryKey: queryKey,
    enabled: enabled,
    queryFn: () => request_getsection_image(id),
    onSuccess: (resp: any) => {
      if (resp.status === 200 || resp.status === 201) {
        onSuccess?.(resp.data.data);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        onError?.(resp);
      }
    },
    onError(err: any) {
      if (onError) onError(err);
      toast({
        title: "Error",
        description: "Something went wrong.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  } as UseQueryOptions<any, any>);

  return {
    isImageFetching: isFetching,
    imageData: data,
    status,
  };
}
