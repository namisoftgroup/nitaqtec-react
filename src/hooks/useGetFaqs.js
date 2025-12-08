import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export function useGetFaqs() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("faq_categories");
        const data = response.data.data;
        return data;
      } catch (err) {
        console.error("Error fetching faqs data:", err);
        return null;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { faqs: data, isLoading, error };
}
