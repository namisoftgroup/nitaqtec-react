import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export function useGetRates() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["testimonials"],
    
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("testimonial");
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

  return { testimonials: data, isLoading, error };
}
