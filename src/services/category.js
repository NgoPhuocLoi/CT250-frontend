import createApiClient from "./api";

class CategoryService {
  constructor(baseUrl = "/api/categories") {
    this.api = createApiClient(baseUrl);
  }

  async getAll() {
    return (await this.api.get("/")).data;
  }

  async getOne(categoryId) {
    return (await this.api.get("/" + categoryId)).data;
  }

  async getBreadcumbFromSubcategory(subCategoryId) {
    return (await this.api.get("/breadcumb?fromCategoryId=" + subCategoryId))
      .data;
  }

  async getBreadcumbFromProduct(productSlug) {
    return (await this.api.get("/breadcumb?fromProductSlug=" + productSlug))
      .data;
  }
}

export default new CategoryService();
