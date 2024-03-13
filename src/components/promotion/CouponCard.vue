<template>
  <div
    class="flex items-center border-[0.5px] border-gray-300 min-h-[130px] rounded-[3px]"
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
        class="absolute bg-white -top-[78px] border-t-[transparent] border-r-[transparent] border-[0.5px] border-gray-300 w-[17px] h-[17px] rounded-[50%] -rotate-45"
      ></div>
      <div
        class="border-r-[0.5px] border-gray-300 border-dashed absolute -top-[40px] left-[8.5px] h-[110px] w-[1px]"
      ></div>
      <div
        class="absolute bg-white -bottom-[78px] border-b-[transparent] border-l-[transparent] border-[0.5px] border-gray-300 w-[17px] h-[17px] rounded-[50%] -rotate-45"
      ></div>
    </div>
    <div class="relative flex flex-col gap-4 justify-between py-3 pr-3 w-full">
      <div>
        <div class="flex justify-between">
          <div>
            <div class="leading-[25px] mb-2">Giảm 20%</div>
            <div class="leading-[22px] text-gray-500 mb-2">
              Cho đơn hàng từ 0 VND
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="leading-[22px] text-gray-500">
            HSD: 24.01.2024 - 24.02.2024
          </div>
        </div>
      </div>
      <div class="flex">
        <button class="btn-basic px-4 py-2 w-[60%] mx-auto">Thu thập</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["isCollected"]);
</script>
