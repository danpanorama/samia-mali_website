import axios from "axios";

const axiosInstance = axios.create({
  baseURL:process.env.BASE_URL_AWS ||'http://18.182.30.112:3050/',
  // baseURL: "http://localhost:3000/",
});



export default axiosInstance;
