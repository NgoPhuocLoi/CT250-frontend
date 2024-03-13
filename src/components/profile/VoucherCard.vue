<template>
  <div
    class="flex items-center border-[0.5px] border-gray-300 min-h-[130px] rounded-[3px] w-full"
  >
    <div class="p-[15px] pr-0">
      <div class="flex h-[75%] w-[120px] justify-start items-center">
        <img
          class="rounded-[5px] w-[80%]"
          src="../../assets/promo-voucher.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="relative w-[35px] flex py-[15px] px-0 -ml-6">
      <div
        class="absolute bg-white -top-[58px] border-t-[transparent] border-r-[transparent] border-[0.5px] border-gray-300 w-[17px] h-[17px] rounded-[50%] -rotate-45"
      ></div>
      <div
        class="border-r-[0.5px] border-gray-300 border-dashed absolute -top-[40px] left-[8.5px] h-[110px] w-[1px]"
      ></div>
      <div
        class="absolute bg-white -bottom-[58px] border-b-[transparent] border-l-[transparent] border-[0.5px] border-gray-300 w-[17px] h-[17px] rounded-[50%] -rotate-45"
      ></div>
    </div>
    <div class="relative flex flex-col gap-6 justify-between pr-[15px] w-full">
      <div class="flex justify-between">
        <div>
          <div class="leading-[25px]">
            Giảm
            {{
              props.voucher.discountType === "percentage"
                ? `${props.voucher.discountValue}%`
                : `${new Intl.NumberFormat("vi-VN", {
                    currency: "VND",
                  }).format(props.voucher.discountValue)} VND`
            }}
          </div>
          <div class="leading-[22px] text-gray-500">
            Cho đơn hàng từ
            {{
              `${new Intl.NumberFormat("vi-VN", {
                currency: "VND",
              }).format(props.voucher.minimumPriceToUse)} VND`
            }}
          </div>
        </div>
        <div
          @mouseover="showDetail = true"
          @mouseleave="showDetail = false"
          class="relative cursor-pointer"
        >
          <VoucherInfoIcon />
        </div>
        <div
          :class="{ hidden: !showDetail }"
          @mouseover="showDetail = true"
          @mouseleave="showDetail = false"
          class="absolute top-[40px] bg-white cursor-pointer -right-[110px] border"
        >
          <div
            class="flex flex-col gap-3 min-w-[320px] min-h-[100px] border-[0.5px] border-gray-300 p-[20px] bg-white z-10"
          >
            <div
              class="absolute right-[128px] -top-[8px] w-[17px] h-[17px] border-[0.5px] border-gray-300 border-b-[transparent] border-l-[transparent] -rotate-45 bg-white"
            ></div>
            <div class="flex gap-[15px] bg-white">
              <div class="text-gray-500">Mã voucher</div>
              :
              <div>{{ voucher.code }}</div>
            </div>
            <div class="flex gap-[5px]">
              <div class="text-gray-500">Hạn sử dụng</div>
              :
              <div>
                {{ getFormatDate(voucher.startDate) }} -
                {{ getFormatDate(voucher.endDate) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="leading-[22px] text-gray-500">
          HSD: {{ getFormatDate(voucher.startDate) }} -
          {{ getFormatDate(voucher.endDate) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VoucherInfoIcon } from "../icons";
import { ref } from "vue";
import moment from "moment";
const props = defineProps(["voucher"]);
const showDetail = ref(false);

const getFormatDate = (date) => {
  return moment(date).format("DD.MM.YYYY");
};
</script>
