import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";
import { CreateCartType } from "../types/Cart.type";

const cartAPI = {
  async createCart({ token, product_id, quantity, check }: CreateCartType) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    const data = { product_id, quantity, check };
    const result = await axios.post(`${BASE_URL}/cart/`, data, config);
    // console.log(result.data);
    return result.data;
  },
};

export default cartAPI;
