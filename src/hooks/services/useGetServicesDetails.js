import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getServicesDetails } from "../../apiServices/apiServices";

export function useGetServiceDetails() {


  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["service-details", id],
    queryFn: () => getServicesDetails(id),
    select: (data) => data?.data?.data,

    enabled: !!id,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { serviceDetails: data, isLoading, error };
}
