import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";
import { CreateCartType, UpdateCartQuantityType } from "../types/Cart.type";

const cartAPI = {
  async createCartProduct({
    token,
    product_id,
    quantity,
    check,
  }: CreateCartType) {
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
  async fetchCartList(token: string) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    const result = await axios.get(`${BASE_URL}/cart/`, config);
    return result.data;
  },
  async updateCartQuantity({
    token,
    product_id,
    cart_item_id,
    quantity,
    is_active,
  }: UpdateCartQuantityType) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    const data = { product_id, quantity, is_active };
    const quantityResults = await axios.put(
      `${BASE_URL}/cart/${cart_item_id}/`,
      data,
      config
    );
    // console.log(quantityResults.data);
    return quantityResults.data;
  },
  async deleteCartItem({
    token,
    cart_item_id,
  }: {
    token: string;
    cart_item_id: number;
  }) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    await axios.delete(`${BASE_URL}/cart/${cart_item_id}`, config);
  },
};

export default cartAPI;
