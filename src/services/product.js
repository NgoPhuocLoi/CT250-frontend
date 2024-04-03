import { PRODUCT_ALL } from "@/constants/productType";
import createApiClient from "./api";

class ProductService {
  constructor(baseUrl = "/api/products") {
    this.api = createApiClient(baseUrl);
  }

  async getAll() {
    return await this.getByType(PRODUCT_ALL);
  }

  async getByType(type, limit = 10, page = 1) {
    return (await this.api.get("/", { params: { type, limit, page } })).data;
  }

  async getByCategories({ categoryIds = [], type, limit = 10, page = 1 }) {
    console.log(categoryIds);
    return (
      await this.api.get("/", { params: { type, limit, categoryIds, page } })
    ).data;
  }

  async getByProductIds({
    productIds = [],
    type = "All",
    limit = 10,
    page = 1,
  }) {
    return (
      await this.api.get("/", { params: { type, limit, productIds, page } })
    ).data;
  }

  async getOneBySlug(slug) {
    return (await this.api.get(`/slug/${slug}`)).data;
  }

  async search(query) {
    return (await this.api.get("/search", { params: { q: query } })).data;
  }

  async searchByImageUrl(imageUrl) {
    return (await this.api.get("/search/image", { params: { imageUrl } })).data;
  }

  async getRecommendedProducts(token) {
    return (
      await this.api.request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
        url: import.meta.env.VITE_API_BASE_URL + "/api/products/recommend",
      })
    ).data;
  }
}

export default new ProductService();
