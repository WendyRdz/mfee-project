import axios from "axios";

export const BASE_URL = "http://localhost:3001/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsYW5yYyIsImlhdCI6MTc1ODUyMDc4OSwiZXhwIjoxNzYxMTEyNzg5fQ.pPtq1A9_3yzKlo0rW-mvXfTnYB65Hk2IyIW6qkexb2c";
// ACT 11 - Get the token from localStorage

axiosInstance.interceptors.request.use((config) => {
  config.baseURL = BASE_URL;
  config.headers.Authorization = `Bearer ${token}`;
  config.signal = AbortSignal.timeout(5000);
  return config;
});

export default axiosInstance;
