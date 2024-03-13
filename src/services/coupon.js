import createApiClient from "./api";

class CouponService {
  constructor() {
    this.api = createApiClient("/api/coupons", { needAuth: true });
  }

  async getValidCoupons() {
    return (await this.api.get("/valid")).data;
  }

  async getCollectedCoupons() {
    return (await this.api.get("/collected")).data;
  }

  async collectCoupon(couponCode) {
    return (await this.api.post("/collect", { couponCode })).data;
  }
}

export default new CouponService();
