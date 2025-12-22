import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export function useGetWhatYouNeed() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["what-you-need"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("needs");
        const data = response.data.data;
        return data;
      } catch (err) {
        console.error("Error fetching settings data:", err);
        return null;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { whatYouNeed: data, isLoading, error };
}
