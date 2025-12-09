import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { useSelector } from "react-redux";

export function useGetTeams() {

  const { lang } = useSelector((state) => state.language);

  const { data } = useQuery({
    queryKey: ["teams", lang],
    queryFn: () => axiosInstance.get("/teams"),
    select: (data) => data?.data?.data,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { data };
}
