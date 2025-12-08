import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../apiServices/apiBlogs";

export function useGetBlogs() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { blogs: data, isLoading, error };
}
