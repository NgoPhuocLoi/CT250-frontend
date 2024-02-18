import { PRODUCT_ALL } from "@/constants/productType";
import createApiClient from "./api";

class ProductService {
  constructor(baseUrl = "/api/products") {
    this.api = createApiClient(baseUrl);
  }

  async getAll() {
    return await this.getByType(PRODUCT_ALL);
  }

  async getByType(type, limit = 10) {
    return (await this.api.get("/", { params: { type, limit } })).data;
  }

  async getOneBySlug(slug) {
    return (await this.api.get(`/slug/${slug}`)).data;
  }
}

export default new ProductService();
