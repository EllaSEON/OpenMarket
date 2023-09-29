import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";
import { SellerRegister } from "../types/SellerRegister.type";

const sellerRegisterAPI = {
  async registerProduct({ token, ...productData }: SellerRegister) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };

    const result = await axios.post(
      `${BASE_URL}/products/`,
      productData,
      config
    );
    // console.log(result.data);
    return result.data;
  },
};

export default sellerRegisterAPI;
