import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

interface LoginData {
  username: string;
  password: string;
  login_type: string;
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
};

export default authAPI;
