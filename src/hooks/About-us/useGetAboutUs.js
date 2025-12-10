import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";

export function useGetAboutUs() {


    function getAboutUS(){
        return axiosInstance.get(`/about-us`);
    }

    const {data} = useQuery({
        queryKey: ["aboutUs"],
        queryFn: getAboutUS,
        select: (data) => data?.data?.data[0],
    })

    return {aboutData: data};

}