import axios from "axios";

const httpService = axios.create({
  baseURL: "localhost",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

httpService.interceptors.request.use(
  config => {
    config.headers["Authorization"] = localStorage.getItem("token");

    return config;
  },
  error => Promise.reject(error)
);

export default httpService;