<script setup>
import { ORDER_STATUS_ID_MAPPING } from "@/constants/orderStatus";
import { PAYMENT_STATUS_ID_MAPPING } from "@/constants/paymentStatus";
import orderService from "@/services/order";
import paymentService from "@/services/payment";
import { useCartStore } from "@/stores";
import moment from "moment";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

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
  <div class="w-full md:w-3/4 lg:ml-4">
    <div
      class="rounded shadow-md border-[0.5px] border-gray-300 p-[30px] mb-6 w-full h-full"
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

      <div class="w-full flex justify-between text-xl mt-4 mb-[30px]">
        <div>
          <div class="mb-[10px]">Chi tiết đơn hàng</div>
          <div class="text-[16px]">
            Ngày đặt hàng:
            {{ moment(order?.createdAt).format("DD.MM.YYYY - HH:mm") }}
          </div>
        </div>

        <div
          :class="
            order?.currentStatusId === ORDER_STATUS_ID_MAPPING.DELIVERED
              ? 'text-green-500'
              : order?.currentStatusId === ORDER_STATUS_ID_MAPPING.CANCELED
              ? 'text-red-500'
              : 'text-orange-500'
          "
        >
          {{ order?.currentStatus.name }}
        </div>
      </div>

      <div class="flex gap-5 w-full mb-[30px]">
        <div class="p-[15px] border border-gray-300 rounded text-[15px] flex-1">
          <div class="mb-5">ĐỊA CHỈ NGƯỜI NHẬN</div>

          <div class="flex flex-col gap-[10px]">
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
          class="p-[15px] border border-gray-300 rounded text-[15px] flex-1 flex flex-col"
        >
          <div class="mb-5">HÌNH THỨC THANH TOÁN</div>

          <div class="flex flex-col gap-[10px]">
            <div>{{ order?.Payment.paymentMethod.name }}</div>
          </div>

          <div
            v-if="
              order?.currentStatusId ===
              ORDER_STATUS_ID_MAPPING.AWAITING_CONFIRM
            "
            class="flex justify-between mt-auto w-full"
          >
            <button
              class="btn-basic px-5 py-2 bg-orange-500"
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
                >lại</span
              >
            </button>
            <div
              :class="`text-lg ml-auto flex items-center ${
                order?.Payment.paymentStatusId ===
                PAYMENT_STATUS_ID_MAPPING.PENDING
                  ? 'text-orange-500'
                  : order?.Payment.paymentStatusId ===
                    PAYMENT_STATUS_ID_MAPPING.FAILED
                  ? 'text-red-500'
                  : 'text-green-500'
              }`"
            >
              <p class="leading-none">
                {{ order?.Payment.paymentStatus.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="border border-gray-300 rounded">
        <div class="px-5 py-[15px] grid grid-cols-7 bg-gray-200 text-[15px]">
          <div class="col-span-4">Sản phẩm</div>
          <div>Đơn giá</div>
          <div>Số lượng</div>
          <div>Tổng tính</div>
        </div>

        <div
          class="mt-[15px] border-b border-gray-300"
          v-for="orderDetail in order?.OrderDetail"
        >
          <div class="grid grid-cols-7 text-sm mb-[15px]">
            <div class="col-span-4 flex gap-[10px] pl-5">
              <img
                class="w-[88px] h-[88px] object-cover"
                :src="orderDetail.variant.color.productImage.image.path"
                alt=""
              />

              <div class="flex flex-col gap-[10px]">
                <div>{{ orderDetail.variant.product.name }}</div>

                <div>
                  <span class="w-[100px] inline-block">Màu sắc</span>:
                  {{ orderDetail.variant.color.name }}
                </div>

                <div>
                  <span class="w-[100px] inline-block">Size</span>:
                  {{ orderDetail.variant.size.name }}
                </div>
              </div>
            </div>

            <div class="flex items-center">
              {{ new Intl.NumberFormat().format(orderDetail.price) }}
              VND
            </div>

            <div class="flex items-center">x{{ orderDetail.quantity }}</div>

            <div class="flex items-center">
              {{
                new Intl.NumberFormat().format(
                  orderDetail.price * orderDetail.quantity
                )
              }}
              VND
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[30px] flex gap-[10px]">
        <div class="flex-1 flex gap-[10px] h-fit">
          <button
            @click="() => handleCancelOrder(order?.id)"
            class="px-5 py-2 border border-black rounded hover:bg-black hover:text-white"
            v-if="
              order?.currentStatusId ===
                ORDER_STATUS_ID_MAPPING.AWAITING_CONFIRM ||
              order?.currentStatusId ===
                ORDER_STATUS_ID_MAPPING.AWAITING_FULFILLMENT
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

        <div class="gap-10 text-lg flex-1 pl-8">
          <div class="flex">
            <div>Tổng tiền hàng</div>

            <div class="ml-auto">
              {{ new Intl.NumberFormat().format(order?.totalPrice) }} VND
            </div>
          </div>

          <div class="flex mt-2">
            <div>Phí vận chuyển</div>

            <div class="ml-auto">
              {{ new Intl.NumberFormat().format(order?.shippingFee) }} VND
            </div>
          </div>

          <div class="flex mt-2">
            <div>Giảm trừ</div>

            <div class="ml-auto">
              {{ new Intl.NumberFormat().format(order?.totalDiscount) }}
              VND
            </div>
          </div>

          <div class="flex mt-5 text-orange-500">
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
