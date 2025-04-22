import axios from "axios";
import { BACKEND_API } from "./config";

const axiosInstance = axios.create({
  baseURL: BACKEND_API.restAPI,
  timeout: 10000, // 10s timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
