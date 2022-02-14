import axios from "axios";
const axiosConfig = axios.create({
  baseURL: "http://locahost:5000",
});

const endPoints = {
  getAllProducts: "/api/products",
};

export { axiosConfig, endPoints };
