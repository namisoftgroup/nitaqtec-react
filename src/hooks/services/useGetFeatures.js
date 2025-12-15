


import { useQuery } from "@tanstack/react-query";
import { getFeatures } from "../../apiServices/apiServices";

export function useGetFeatures() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: getFeatures,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { features: data, isLoading, error };
}
