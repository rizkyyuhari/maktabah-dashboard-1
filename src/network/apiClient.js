import axios from "axios";


const axiosClient = axios.create({
  baseURL: `http://localhost:8080/api/v1/book`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});



export default axiosClient;
