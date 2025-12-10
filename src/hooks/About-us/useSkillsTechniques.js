import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";

export function useSkillsTechniques() {


    function getSkillTechniques(){
        return axiosInstance.get(`/skills-techniques`);
    }

    const {data} = useQuery({
        queryKey: ["skillTechniques"],
        queryFn: getSkillTechniques,
        select: (data) => data?.data?.data,
    })

    return {skill: data};

}