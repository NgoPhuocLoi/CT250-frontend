import createApiClient from "./api";

class OrderService {
  constructor() {
    this.api = createApiClient("/api/orders", { needAuth: true });
  }

  async createOrder({
    totalPrice,
    totalDiscount,
    finalPrice,
    shippingFee,
    deliveryAddressId,
    paymentMethodId,
    items,
    usedCouponId,
  }) {
    return (
      await this.api.post("/", {
        totalPrice,
        totalDiscount,
        finalPrice,
        shippingFee,
        deliveryAddressId,
        paymentMethodId,
        items,
        usedCouponId,
      })
    ).data;
  }

  async cancelOrder(orderId) {
    return (await this.api.put("/" + orderId)).data;
  }

  async getAllOrderStatus() {
    return (await this.api.get("/status-all")).data;
  }

  async getOrdersByStatus(orderStatusId) {
    return (await this.api.get("/?orderStatusId=" + orderStatusId)).data;
  }

  async getOrderById(orderId) {
    return (await this.api.get("/" + orderId)).data;
  }
}

export default new OrderService();
