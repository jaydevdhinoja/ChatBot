import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.APIURL || "http://localhost:3001",
});
