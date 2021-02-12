import axios from "axios";

export const baseUrl = "https://api.github.com/";

export const axiosInstance = axios.create({ baseURL: baseUrl }); // ensures that all axios calls contain the baseUrl by default