<script setup>
import { ORDER_STATUS_ID_MAPPING } from "@/constants/orderStatus";

import OrderStatus from "@/components/order/OrderStatus.vue";

const props = defineProps(["order", "handleCancelOrder", "handleReOrder"]);
</script>
<template>
  <div class="p-5 w-full border">
    <div>
      <RouterLink
        :to="`/tai-khoan/quan-ly-don-hang/${props.order.id}`"
        class="flex w-full gap-5"
      >
        <div class="w-[150px] flex-shrink-0">
          <img
            class="w-[150px] h-[150px]"
            :src="
              props.order.OrderDetail[0].variant.color.productImage.image.path
            "
            alt=""
          />
        </div>
        <div class="text-[16px] w-full">
          <div class="pb-2 border-b w-full border-gray-300 flex">
            <div>
              <div class="flex">
                <div class="w-[150px]">Số lượng</div>
                <div>: {{ props.order.OrderDetail?.length }} sản phẩm</div>
              </div>

              <div class="flex">
                <div class="w-[150px]">Tổng tiền hàng</div>
                <div>
                  :
                  {{ new Intl.NumberFormat().format(props.order.totalPrice) }}
                  VNĐ
                </div>
              </div>

              <div class="flex">
                <div class="w-[150px]">Phí vận chuyển</div>
                <div>
                  :
                  {{ new Intl.NumberFormat().format(props.order.shippingFee) }}
                  VNĐ
                </div>
              </div>
            </div>

            <div class="ml-auto">
              <OrderStatus :orderStatus="props.order?.currentStatus" />
            </div>
          </div>

          <div class="text-xl text-orange-500 mt-2 text-right w-full">
            Tổng thanh toán:
            {{ new Intl.NumberFormat().format(props.order.finalPrice) }} VNĐ
          </div>
        </div>
      </RouterLink>
    </div>

    <div class="mt-4 flex gap-[10px] justify-end">
      <button
        class="px-4 py-[2px] border border-black rounded hover:bg-black hover:text-white text-[15px]"
        v-if="
          props.order.currentStatusId ===
          ORDER_STATUS_ID_MAPPING.AWAITING_CONFIRM
        "
        @click="() => props.handleCancelOrder(props.order.id)"
      >
        Hủy đặt hàng
      </button>
      <button
        class="px-4 py-[2px] border border-black rounded hover:bg-black hover:text-white text-[15px]"
        v-if="props.order.currentStatusId === ORDER_STATUS_ID_MAPPING.CANCELED"
        @click="() => handleReOrder(props.order)"
      >
        Mua lại
      </button>
    </div>
  </div>
</template>
