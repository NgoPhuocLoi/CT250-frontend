import createApiClient from "./api";

class ShippingService {
  constructor() {
    this.api = createApiClient("/api/shippings", { needAuth: true });
  }

  async calculateOrderFee({ toDistrictId, toWardCode }) {
    const FIXED_WEIGHT_IN_GRAM = 500;

    return (
      await this.api.post("/fee", {
        toDistrictId,
        toWardCode,
        weightInGram: FIXED_WEIGHT_IN_GRAM,
      })
    ).data;
  }
}

export default new ShippingService();
