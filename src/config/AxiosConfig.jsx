import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3050/',
  // baseURL: "http://localhost:3000/",
});



export default axiosInstance;
