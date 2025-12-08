import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export function useGetClients() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("get_customers");
        const data = response.data.data;
        return data;
      } catch (err) {
        console.error("Error fetching project data:", err);
        return null;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { clients: data, isLoading, error };
}
