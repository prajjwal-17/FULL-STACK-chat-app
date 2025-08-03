import axios from 'axios'

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001/api"
  : "https://full-stack-chat-app-gyuv.onrender.com/api"; // <-- backend hosted on Render

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // sending cookies with every request
});
