<template>
  <div
    class="flex items-center border-[0.5px] border-gray-300 min-h-[130px] rounded-[3px]"
  >
    <div class="md:pl-2 pl-1">
      <div
        class="flex h-[75%] w-[100px] md:w-[120px] justify-start items-center"
      >
        <img
          class="rounded-[5px] w-[80%]"
          src="../../assets/promo-voucher.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="relative w-[35px] flex py-[15px] px-0 -ml-6">
      <div
        class="absolute bg-white -top-[78px] border-t-[transparent] border-r-[transparent] border-[0.5px] border-gray-300 w-[17px] h-[17px] rounded-[50%] -rotate-45"
      ></div>
      <div
        class="border-r-[0.5px] border-gray-300 border-dashed absolute -top-[40px] left-[8.5px] h-[110px] w-[1px]"
      ></div>
      <div
        class="absolute bg-white -bottom-[78px] border-b-[transparent] border-l-[transparent] border-[0.5px] border-gray-300 w-[17px] h-[17px] rounded-[50%] -rotate-45"
      ></div>
    </div>
    <div
      class="relative flex flex-col gap-3 md:gap-6 justify-between pr-1 md:pr-[15px] w-full text-[15px] md:text-lg py-2 pl-1"
    >
      <div>
        <div class="flex justify-between">
          <div class="w-full">
            <div class="leading-[25px] mb-1 md:mb-2 flex justify-between">
              <span>
                Giảm
                {{
                  coupon.discountType === "percentage"
                    ? `${props.coupon.discountValue}%`
                    : `${new Intl.NumberFormat("vi-VN", {
                        currency: "VND",
                      }).format(coupon.discountValue)} VND`
                }}
              </span>

              <span class="text-[12px] md:text-[15px]"
                >Còn: {{ coupon.quantity - coupon.collectedQuantity }}</span
              >
            </div>
            <div class="leading-[22px] text-gray-500 mb-1 md:mb-2">
              Cho đơn hàng từ
              {{
                `${new Intl.NumberFormat("vi-VN", {
                  currency: "VND",
                }).format(props.coupon.minimumPriceToUse)}`
              }}
              VND
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="leading-[22px] text-gray-500">
            HSD: {{ getFormatDate(coupon.startDate) }} -
            {{ getFormatDate(coupon.endDate) }}
          </div>
        </div>
      </div>
      <div class="flex">
        <button
          @click="handleCollectCoupon"
          v-if="!isCollected"
          class="btn-basic px-4 py-2 w-[60%] mx-auto"
        >
          Lấy
        </button>
        <button
          v-else
          class="btn-basic px-4 py-2 w-[60%] mx-auto opacity-60 cursor-default pointer-events-none"
        >
          Đã lấy
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import { ref, toRef } from "vue";
import couponService from "@/services/coupon";

const props = defineProps(["isCollected", "coupon"]);
const collectedCouponIds = defineModel();

const coupon = toRef(() => props.coupon);

function getFormatDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

async function handleCollectCoupon() {
  try {
    await couponService.collectCoupon(props.coupon.code);
    coupon.value.collectedQuantity++;
    collectedCouponIds.value.push(props.coupon.id);
  } catch (error) {
    console.log(error);
  }
}
</script>
