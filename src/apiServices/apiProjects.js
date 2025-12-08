import axiosInstance from "../utils/axios";

export async function getProjects(category) {
  try {
    const response = await axiosInstance.get("get_projects", {
      params: {
        category,
      },
    });
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await axiosInstance.get("get_categories");
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}

export async function getProject(id) {
  try {
    const response = await axiosInstance.get(`project_details/${id}`);
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}
