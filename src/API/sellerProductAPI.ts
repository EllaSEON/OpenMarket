import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";
import { SellerRegisterWithToken } from "../types/SellerRegister.type";

const sellerProductAPI = {
  async createRegisterProduct({
    token,
    ...productData
  }: SellerRegisterWithToken) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const result = await axios.post(
      `${BASE_URL}/products/`,
      productData,
      config
    );
    return result.data;
  },
  async fetchSellerProduct(token: string) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    const result = await axios.get(`${BASE_URL}/seller`, config);
    return result.data;
  },
  async deleteSellerProduct({
    token,
    productId,
  }: {
    token: string;
    productId: number;
  }) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    const result = await axios.delete(
      `${BASE_URL}/products/${productId}`,
      config
    );
    return result.data;
  },
};

export default sellerProductAPI;
