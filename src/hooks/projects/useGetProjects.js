import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../apiServices/apiProjects";
import { useSearchParams } from "react-router-dom";

export function useGetProjects() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(category),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { projects: data, isLoading, error };
}
