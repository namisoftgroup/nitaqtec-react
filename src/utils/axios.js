import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nitaq-tec.nami-tec.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem("lang") || "ar";
    config.headers["Accept-Language"] = lang;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
