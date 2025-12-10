import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../apiServices/apiProjects";
import { useSearchParams } from "react-router-dom";

export function useGetProjects() {
  const [searchParams] = useSearchParams();
  const projects = searchParams.get("projects");

  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(projects),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { projects: data, isLoading, error };
}
