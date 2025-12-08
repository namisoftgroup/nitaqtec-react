import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export function useGetIdeaDetails(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["idea-details", id],
    queryFn: async () => {
      try {
        const response = await axiosInstance.post("get_what_you_need_ideas", {
          id,
        });
        const data = response.data.data;
        return data;
      } catch (err) {
        console.error("Error fetching settings data:", err);
        return null;
      }
    },
    enabled: !!id,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { ideas: data, isLoading, error };
}
