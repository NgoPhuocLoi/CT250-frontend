import createApiClient from "./api";

class PaymentService {
  constructor() {
    this.api = createApiClient("/api/payments", { needAuth: true });
  }

  async getPaymentMethods() {
    return (await this.api.get("/methods")).data;
  }

  async createPaymentUrl({ orderId, amount }) {
    return (await this.api.post("/create-payment-url", { orderId, amount }))
      .data;
  }
}

export default new PaymentService();
