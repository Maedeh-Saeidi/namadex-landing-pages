import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { request_getPost_image } from "../api/request";

interface IProps {
  onSuccess?: (resp?: any) => void;
  onError?: (resp?: unknown) => void;
  enabled?: boolean;
  queryKey: any[];
  postId: number;
}
export function useGetPostImage({
  onSuccess,
  onError,
  enabled,
  queryKey,
  postId,
}: IProps) {
  const toast = useToast();
  const { isFetching, data, status } = useQuery({
    queryKey: queryKey,
    enabled: enabled,
    queryFn: () => request_getPost_image(postId),
    onSuccess: (resp: any) => {
      if (resp.status === 200 || resp.status === 201) {
        onSuccess?.(resp);
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
    isPostImageFetching: isFetching,
    postImage: data,
    status,
  };
}
