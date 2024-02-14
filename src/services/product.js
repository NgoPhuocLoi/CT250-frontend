import { PRODUCT_ALL } from "@/constants/productType";
import createApiClient from "./api";

class ProductService {
  constructor(baseUrl = "/api/products") {
    this.api = createApiClient(baseUrl);
  }

  async getAll() {
    return await this.getByType(PRODUCT_ALL);
  }

  async getByType(type) {
    return (await this.api.get("/", { params: { type } })).data;
  }

  async getOneWithSlug(slug) {
    return (await this.api.get(`/${slug}`)).data;
  }
}

export default new ProductService();
