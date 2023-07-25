import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}
interface BasePostData {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

export interface BuyerPostData extends BasePostData {}

export interface SellerPostData extends BasePostData {
  company_registration_number: string;
  store_name: string;
}

const authAPI = {
  async createLogin(loginForm: LoginData) {
    const response = await axios.post(`${BASE_URL}/accounts/login/`, loginForm);
    if (response.data) {
      return response.data.token;
    }
  },
  async createLogout() {
    await axios.post(`${BASE_URL}/accounts/logout/`);
  },
  async createSignupBuyer(buyerData: BuyerPostData) {
    const response = await axios.post(
      `${BASE_URL}/accounts/signup/`,
      buyerData
    );
    return response.data;
  },
  async createSignupSeller(sellerData: SellerPostData) {
    await axios.post(`${BASE_URL}/accounts/signup_seller/`, sellerData);
  },
  async createValidateUserName({ username }: { username: string }) {
    const response = await axios.post(
      `${BASE_URL}/accounts/signup/valid/username/`,
      {
        username,
      }
    );
    return response.data;
  },
  async createValidateCompanyNo({
    company_registration_number,
  }: {
    company_registration_number: number;
  }) {
    const response = await axios.post(
      `${BASE_URL}/accounts/signup/valid/company_registration_number/`,
      { company_registration_number }
    );
    return response.data;
  },
};

export default authAPI;
