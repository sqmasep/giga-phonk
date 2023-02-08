import axios from "axios";

export const keys = {};

export const getProfile = () => axios.get("/profile");
