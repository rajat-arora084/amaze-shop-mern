import axios from "axios";
import { axiosConfig, endPoints } from "../utils/constants";
const getAllProducts = () => {
  return (
    axios.get("http://localhost:5000" + endPoints.getAllProducts) ||
    axiosConfig.get(endPoints.getAllProducts)
  );
};

const getProduct = (id) => {
  return (
    axios.get("http://localhost:5000" + endPoints.getAllProducts + "/" + id) ||
    axiosConfig.get(endPoints.getAllProducts)
  );
};
export { getAllProducts, getProduct };
