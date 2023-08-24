import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const login = async (user) => {
  try {
    const response = await axios.post(`${base_url}user/auth/loginAdmin`, user);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/get_all_orders`, config);

  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.post(
    `${base_url}user/get_orders${id}`,
    "",
    config
  );

  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrder,
};

export default authService;
