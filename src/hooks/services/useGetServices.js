import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../apiServices/apiServices";
import { useSearchParams } from "react-router-dom";

export function useGetServices() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data, error, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () => getServices(category),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { services: data, isLoading, error };
}
