import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlogsDetails } from "../../apiServices/apiBlogs";

export function useGetBlogsDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["blogs-details", id],
    queryFn: () => getBlogsDetails(id),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { blogsDetails: data, error, isLoading };
}
