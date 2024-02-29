import createApiClient from "./api";

class PaymentService {
  constructor() {
    this.api = createApiClient("/api/payments", { needAuth: true });
  }

  async getPaymentMethods() {
    return (await this.api.get("/methods")).data;
  }
}

export default new PaymentService();
