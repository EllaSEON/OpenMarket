import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";
import { SellerRegisterWithToken } from "../types/SellerRegister.type";

const sellerRegisterAPI = {
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
};

export default sellerRegisterAPI;
