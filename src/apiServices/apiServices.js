import axiosInstance from "../utils/axios";

export async function getServices(category) {
  try {
    const response = await axiosInstance.get("get_Services", {
      params: {
        category,
      },
    });
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching services data:", err);
    return null;
  }
}
