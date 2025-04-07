import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-g8im.onrender.com/",
});
export { axiosInstance };
