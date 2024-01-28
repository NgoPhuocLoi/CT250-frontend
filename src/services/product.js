import createApiClient from "./api";

class ProductService {
  constructor(baseUrl = "/api/products") {
    this.api = createApiClient(baseUrl);
  }

  async getAll(data) {
    return (await this.api.get("/")).data;
  }

  async getOneWithSlug(slug) {
    return (await this.api.get(`/${slug}`)).data;
  }
}

export default new ProductService();
