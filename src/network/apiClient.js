import axios from "axios";

axios.defaults.withCredentials = true;

const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api/v1/book/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
