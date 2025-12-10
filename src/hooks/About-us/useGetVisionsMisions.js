import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";

export function useGetVisonsMisions() {

function getVisonsMisions(){
    return axiosInstance.get(`visions-missions`);
}

    const {data} = useQuery({
        queryKey: ["visionsMisions"],
        queryFn: getVisonsMisions,
        select: (data) => data?.data?.data,
    })

    return {visionsMisionsData: data};

}