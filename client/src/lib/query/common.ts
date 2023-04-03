import axiosLib from "axios";

export const axios = axiosLib.create({
  baseURL: "http://localhost:8000/api",
});
