import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

const productAPI = {
  async fetchProducts(currentPage: number) {
    const products = await axios.get(
      `${BASE_URL}/products?page=${currentPage}`
    );
    return products.data;
  },
  async fetchSearch(keyword: string) {
    const searchResults = await axios.get(
      `${BASE_URL}/products/?search=${keyword}`
    );
    return searchResults.data;
  },
  async fetchProductDetail(productId: number) {
    const detailResults = await axios.get(`${BASE_URL}/products/${productId}`);
    return detailResults.data;
  },
};

export default productAPI;
