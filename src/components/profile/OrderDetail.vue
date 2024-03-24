<script setup>
import { ORDER_STATUS_ID_MAPPING } from "@/constants/orderStatus";
import { PAYMENT_STATUS_ID_MAPPING } from "@/constants/paymentStatus";
import orderService from "@/services/order";
import paymentService from "@/services/payment";
import OrderStatus from "@/components/order/OrderStatus.vue";
import PaymentStatus from "@/components/order/PaymentStatus.vue";
import { useCartStore } from "@/stores";
import moment from "moment";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDiscountValue } from "@/utils";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

const order = ref();

onMounted(async () => {
  if (route.query.code) {
    const isSuccess = route.query.code === "00";

    Swal.fire({
      title: isSuccess ? "Thành công" : "Thất bại",
      text: isSuccess ? "Thanh toán thành công" : "Thanh toán thất bại",
      icon: isSuccess ? "success" : "error",
    });
  }

  await fetchOrderInformation();
});

async function fetchOrderInformation() {
  try {
    const res = await orderService.getOrderById(route.params.orderId);

    order.value = res.metadata;
  } catch (error) {
    console.log(error);
  }
}

function handleCancelOrder(orderId) {
  Swal.fire({
    title: "Hủy đơn hàng",
    text: "Bạn đồng ý hủy đơn hàng này không?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Dừng",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await orderService.cancelOrder(orderId);
      Swal.fire({
        title: "Thành công",
        text: "Đơn hàng đã được hủy thành công!",
        icon: "success",
      }).then(async () => {
        await fetchOrderInformation();
      });
    }
  });
}

function handleReOrder(order) {
  order.OrderDetail.forEach((item) => {
    cartStore.addItem({
      productId: item.variant.productId,
      variantId: item.variantId,
      quantity: item.quantity,
      price: item.price,
      productDiscount: item.discount,
    });
  });

  router.push("/gio-hang");
}

async function handlePayment() {
  try {
    const res = await paymentService.createPaymentUrl({
      orderId: order.value?.id,
      amount: order.value?.finalPrice,
    });

    const redirectUrl = res.metadata.redirectUrl;
    console.log(redirectUrl);
    window.location = redirectUrl;
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <div class="w-full">
    <div
      class="rounded shadow-md md:border-[0.5px] border-gray-300 p-[10px] sm:p-[30px] mb-6 w-full h-full"
    >
      <RouterLink
        to="/tai-khoan/quan-ly-don-hang"
        class="text-gray-600 hover:text-gray-500 text-sm flex gap-2 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        <span>Quay lại quản lý đơn hàng</span>
      </RouterLink>

      <div
        class="w-full flex justify-between text-xl mt-4 mb-[10px] sm:mb-[30px]"
      >
        <div class="w-full">
          <div class="flex justify-between w-full mb-1">
            <div
              class="mb-[10px] font-bold text-[15px] sm:text-[16px] md:text-lg lg:text-2xl"
            >
              Chi tiết đơn hàng
            </div>
            <OrderStatus :orderStatus="order?.currentStatus" />
          </div>
          <div class="text-[15px] sm:text-[16px]">
            Ngày đặt hàng:
            {{ moment(order?.createdAt).format("DD.MM.YYYY - HH:mm") }}
          </div>
        </div>
      </div>

      <div
        class="flex gap-5 w-full mb-[20px] sm:mb-[30px] flex-col md:flex-row"
      >
        <div
          class="p-[10px] sm:p-[15px] border border-gray-300 rounded text-[15px] flex-1"
        >
          <div class="mb-2 sm:mb-5 font-bold">ĐỊA CHỈ NGƯỜI NHẬN</div>

          <div class="flex flex-col gap-1 sm:gap-[10px]">
            <div>{{ order?.deliveryAddress.contactName }}</div>
            <div>
              Địa chỉ: {{ order?.deliveryAddress.detailAddress }},
              {{ order?.deliveryAddress.wardName }},
              {{ order?.deliveryAddress.districtName }},
              {{ order?.deliveryAddress.provinceName }}
            </div>
            <div>Điện thoại: {{ order?.deliveryAddress.contactPhone }}</div>
          </div>
        </div>

        <div
          class="p-[10px] sm:p-[15px] border border-gray-300 rounded text-[15px] flex-1 flex flex-col"
        >
          <div class="mb-2 sm:mb-5 font-bold">HÌNH THỨC THANH TOÁN</div>

          <div class="flex flex-col gap-1 sm:gap-[10px]">
            <div>{{ order?.Payment.paymentMethod.name }}</div>
          </div>

          <div
            v-if="
              order?.currentStatusId >=
                ORDER_STATUS_ID_MAPPING.AWAITING_CONFIRM &&
              order?.currentStatusId <=
                ORDER_STATUS_ID_MAPPING.AWAITING_FULFILLMENT
            "
            class="flex justify-between mt-auto w-full items-center"
          >
            <button
              class="btn-basic px-5 py-1 mt-1 sm:py-2 bg-orange-500 text-[15px] sm:text-lg"
              v-if="
                order?.Payment.paymentMethod.id === 2 &&
                order?.Payment.paymentStatus.id !==
                  PAYMENT_STATUS_ID_MAPPING.SUCCESS
              "
              @click="handlePayment"
            >
              <span>Thanh toán</span>
              <span
                v-if="
                  order?.Payment.paymentStatus.id ===
                  PAYMENT_STATUS_ID_MAPPING.FAILED
                "
              >
                lại</span
              >
            </button>
            <div class="ml-auto">
              <PaymentStatus :payment-status="order?.Payment.paymentStatus" />
            </div>
          </div>
        </div>
      </div>

      <div class="border border-gray-300 rounded">
        <div
          class="hidden px-5 py-[15px] sm:grid grid-cols-7 bg-gray-200 text-[15px]"
        >
          <div class="col-span-4">Sản phẩm</div>
          <div>Đơn giá</div>
          <div>Số lượng</div>
          <div>Tổng tính</div>
        </div>

        <div
          class="mt-[15px] border-b border-gray-300"
          v-for="orderDetail in order?.OrderDetail"
        >
          <div class="sm:grid sm:grid-cols-7 text-sm mb-[15px]">
            <div class="sm:col-span-4 flex gap-[10px] pl-3 sm:pl-5">
              <img
                class="w-[88px] h-[88px] object-cover"
                :src="orderDetail.variant.color.productImage.image.path"
                alt=""
              />

              <div class="flex flex-col gap-[10px]">
                <div>{{ orderDetail.variant.product.name }}</div>

                <div class="flex sm:flex-col gap-[10px]">
                  <div>
                    <span class="sm:w-[100px] inline-block">Màu sắc</span>:
                    {{ orderDetail.variant.color.name }}
                  </div>
                  <div class="w-[1px] bg-gray-300"></div>
                  <div>
                    <span class="sm:w-[100px] inline-block">Size</span>:
                    {{ orderDetail.variant.size.name }}
                  </div>
                </div>

                <div class="flex justify-between">
                  <div class="flex sm:hidden items-center">
                    x{{ orderDetail.quantity }}
                  </div>
                  <div class="flex sm:hidden items-center">
                    {{
                      new Intl.NumberFormat().format(
                        (orderDetail.price - orderDetail.discount) *
                          orderDetail.quantity
                      )
                    }}
                    VND
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden sm:flex flex-col justify-center">
              <span
                class="text-[13px] line-through text-gray-600"
                v-if="orderDetail.discount"
                >{{
                  new Intl.NumberFormat().format(orderDetail.price)
                }}
                VND</span
              >
              <span>
                {{
                  new Intl.NumberFormat().format(
                    orderDetail.price - orderDetail.discount
                  )
                }}
                VND
              </span>
            </div>

            <div class="hidden sm:flex items-center">
              x{{ orderDetail.quantity }}
            </div>

            <div class="hidden sm:flex items-center">
              {{
                new Intl.NumberFormat().format(
                  (orderDetail.price - orderDetail.discount) *
                    orderDetail.quantity
                )
              }}
              VND
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-[30px] flex gap-[10px] flex-col-reverse sm:flex-row text-[15px] sm:text-[16px] md:text-lg"
      >
        <div class="flex-1 flex gap-[10px] h-fit">
          <button
            @click="() => handleCancelOrder(order?.id)"
            class="px-5 py-1 w-full sm:w-fit md:py-2 border border-black rounded hover:bg-black hover:text-white"
            v-if="
              order?.currentStatusId ===
              ORDER_STATUS_ID_MAPPING.AWAITING_CONFIRM
            "
          >
            Hủy đơn
          </button>
          <button
            v-if="order?.currentStatusId === ORDER_STATUS_ID_MAPPING.CANCELED"
            class="btn-basic px-5 py-2 bg-orange-500"
            @click="() => handleReOrder(order)"
          >
            Mua lại
          </button>
        </div>

        <div class="flex-1 md:pl-8">
          <div class="flex">
            <div>Tổng tiền hàng</div>

            <div class="ml-auto">
              {{ new Intl.NumberFormat().format(order?.totalPrice) }} VND
            </div>
          </div>

          <div class="flex mt-1 md:mt-2">
            <div>Phí vận chuyển</div>

            <div class="ml-auto">
              {{ new Intl.NumberFormat().format(order?.shippingFee) }} VND
            </div>
          </div>

          <div class="flex mt-1 md:mt-2">
            <div>Giảm trừ</div>

            <div class="ml-auto">
              {{ new Intl.NumberFormat().format(order?.totalDiscount) }}
              VND
            </div>
          </div>

          <div class="flex mt-2 md:mt-5 text-orange-500">
            <div>Tổng thanh toán</div>

            <div class="ml-auto">
              {{ new Intl.NumberFormat().format(order?.finalPrice) }} VND
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
