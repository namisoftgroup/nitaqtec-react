import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export function useGetSettings() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("settings");
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

  return { settings: data, isLoading, error };
}
