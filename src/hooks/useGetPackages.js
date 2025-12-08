import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";

export default function useGetPackages() {

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["packages"],

    queryFn: async () => {
      const res = await axiosInstance.get("/get_packages");
      return res?.data?.data;
    },

    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, refetch };
}
