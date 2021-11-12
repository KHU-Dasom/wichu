import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.30.1.25:8000/",
  responseType: "json",
});
