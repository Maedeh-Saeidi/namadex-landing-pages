import { useToast } from "@chakra-ui/react";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { request_getsections } from "../api/request";
import { ISection, IUpdatedSection } from "../types";

interface IProps {
  onSuccess?: (resp?: any) => void;
  onError?: (resp?: any) => void;
  enabled: boolean;
  queryKey: any[];
}

export function useGetAllSections({
  onSuccess,
  onError,
  enabled,
  queryKey,
}: IProps) {
  const toast = useToast();
  const { isFetching, data, status } = useQuery({
    queryKey: queryKey,
    enabled: enabled,
    queryFn: () => request_getsections(),
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
  const getData = () => {
    if (data && data.status === 200) {
      return data.data.data as ISection[];
    }
    return undefined;
  };
  const x = getData();
  const parser = (sections: ISection[] | undefined) => {
    return sections?.map((s: ISection) => {
      const color = JSON.parse(s.color);
      return {
        ...s,
        jsonColor: color,
      } as IUpdatedSection;
    });
  };
  return {
    isDataFetching: isFetching,
    data: parser(x),
    status,
  };
}
