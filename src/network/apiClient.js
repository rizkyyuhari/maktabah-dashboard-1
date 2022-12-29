import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://34.23.33.91/api/v1/book`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
