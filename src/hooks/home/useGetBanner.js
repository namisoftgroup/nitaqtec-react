import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
// import axios from "axios";
import axiosInstance from "../../utils/axios";

export function useGetBanner() {
  const { lang } = useSelector((state) => state.language);

  function getBanner() {
    return axiosInstance.get("/banners");
  }

  return  useQuery({
    queryKey: ["banner", lang],
    queryFn: getBanner,
    select: (data) => data?.data?.data[0],
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

//   return { data, error, isLoading, isSuccess };

  // console.log(data?.data?.data[0]);


// or
//    const {data, error, isLoading, isSuccess} = useQuery({
//     queryKey: ["banner", lang],
//     queryFn: getBanner,
//     select: (data) => data?.data?.data[0],
//     retry: false,
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//     refetchOnReconnect: false,
//   });

//   return { data };
}
