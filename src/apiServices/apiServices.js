
// import { useQuery } from "@tanstack/react-query";
// import axiosInstance from "../../utils/axios";
// import { useSelector } from "react-redux";

// export function useGetServices() {
//   const { lang } = useSelector((state) => state.language);

//   const { data } = useQuery({
//     queryKey: ["services", lang],
//     queryFn: () => axiosInstance.get("/services"),
//     select: (data) => data?.data?.data,
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//     refetchOnReconnect: false,
//   });

//   return { services: data };
// }


// export async function getServiceDetails(id) {
//   try {
//     const response = await axiosInstance.get(`services/${id}`);
//     const data = response.data.data;
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
  
// }










import axiosInstance from "../utils/axios";

export async function getServices() {
  try {
    const response = await axiosInstance.get("/services");
    const data = response.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getServicesDetails(id) {
  try {
    const response = await axiosInstance.get(`/services/${id}`);
    const data = response.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
  
}


export async function getFeatures(id) {
  try {
    const response = await axiosInstance.get(`/features`);
    const data = response.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
  
}
