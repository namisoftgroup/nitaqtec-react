import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export function useGetStuff() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["stuff"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("get_stuff");
        const data = response.data.data;
        return data;
      } catch (err) {
        console.error("Error fetching stuff data:", err);
        return null;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { stuff: data, isLoading, error };
}
