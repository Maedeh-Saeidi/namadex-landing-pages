import axios from "axios";
import { API_URL } from "../CONSTANTS";
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const http = {
  post: axiosInstance.post,
  patch: axiosInstance.patch,
  delete: axiosInstance.delete,
  get: axiosInstance.get,
  put: axiosInstance.put,
};
