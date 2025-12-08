import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../apiServices/apiProjects";


export function useGetCategories() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { categories: data, isLoading, error };
}
