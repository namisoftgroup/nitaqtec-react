import axiosInstance from "../utils/axios";

export async function getBlogs() {
  try {
    const response = await axiosInstance.get("get_blogs");
    const data = response.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getBlogsDetails(id) {
  try {
    const response = await axiosInstance.get(`get_blog_details/${id}`);
    const data = response.data.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}
