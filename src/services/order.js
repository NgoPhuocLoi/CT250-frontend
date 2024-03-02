import createApiClient from "./api";

class OrderService {
  constructor() {
    this.api = createApiClient("/api/orders", { needAuth: true });
  }

  async getAllOrderStatus() {
    return (await this.api.get("/status-all")).data;
  }
}

export default new OrderService();
