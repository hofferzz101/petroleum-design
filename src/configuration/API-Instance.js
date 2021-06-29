import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `${token}` : "";
  return config;
});

console.log(process.env.REACT_APP_BASE_URL)
export const CREATE = (url, body) => instance.post(url, body)
export const UPDATE = (url, body) => instance.put(url, body)
export const DELETE = (url) => instance.delete(url)
export const GET = (url) => instance.get(url);