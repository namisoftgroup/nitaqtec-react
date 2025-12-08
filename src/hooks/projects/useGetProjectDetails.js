import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../apiServices/apiProjects";
import { useParams } from "react-router-dom";

export function useGetProjectDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["project-details", id],
    queryFn: () => getProject(id),

    enabled: !!id,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { projectDetails: data, isLoading, error };
}
