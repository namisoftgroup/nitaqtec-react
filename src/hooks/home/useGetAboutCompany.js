import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";

export function useGetAboutCompany() {
  const { lang } = useSelector((state) => state.language);

  function getAboutCompany() {
    return axiosInstance.get(`/company-section`);
  }

  const { data } = useQuery({
    queryKey: ["aboutCompany", lang],
    queryFn: getAboutCompany,
    select: (data) => data?.data?.data[0],
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return {data}
}
