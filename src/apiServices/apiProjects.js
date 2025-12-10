import axiosInstance from "../utils/axios";

export async function getProjects(category) {
  try {
    const response = await axiosInstance.get("projects", {
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
    const response = await axiosInstance.get("categories");
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}

export async function getProject(id) {
  try {
    const response = await axiosInstance.get(`projects/${id}`);
    const data = response.data.data;
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}
