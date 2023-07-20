import axios from "axios";
import { BASE_URL } from "../constant/config";

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

const authAPI = {
  async createLogin(data: LoginData) {
    const response = await axios.post(`${BASE_URL}/accounts/login/`, data);
    if (response.data) {
      return response.data.token;
    }
  },
  async createLogout() {
    await axios.post(`${BASE_URL}/accounts/logout/`);
  },
};

export default authAPI;
