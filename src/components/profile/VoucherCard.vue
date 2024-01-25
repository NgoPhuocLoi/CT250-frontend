<template>
  <div class="flex items-center border min-h-[130px] mt-8 rounded-[3px]">
    <div class="p-[15px] pr-0">
      <div class="flex h-[75%] w-[75%] justify-center items-center">
        <img class="rounded-[5px] max-w-[100%]" src="https://fm.com.vn/images/logoFM.png" alt="">
      </div>
    </div>
    <div class="relative w-[35px] flex py-[15px] px-0 -ml-6">
      <div class="absolute bg-white -top-[78px] border-t-[transparent] border-r-[transparent] border w-[17px] h-[17px] rounded-[50%] -rotate-45"></div>
      <div class="border-r-[0.5px] border-dashed absolute -top-[40px] left-[8.5px] h-[110px] w-[1px]"></div>
      <div class="absolute bg-white -bottom-[78px] border-b-[transparent] border-l-[transparent] border w-[17px] h-[17px] rounded-[50%] -rotate-45"></div>
    </div>
    <div class="relative flex flex-col gap-6 justify-between pr-[15px] w-full">
      <div class="flex justify-between">
        <div>
          <div class="leading-[25px]">Giảm 20%</div>
          <div class="leading-[22px] text-gray-500">Cho đơn hàng từ 0 VND</div>
        </div>
        <div @mouseover="showDetail = true" @mouseleave="showDetail = false" class="relative cursor-pointer">
          <VoucherInfoIcon />
        </div>
        <div :class="{hidden : !showDetail}" @mouseover="showDetail = true" @mouseleave="showDetail = false" class="absolute top-[40px] bg-white cursor-pointer -right-[110px] border">
          <div class="flex flex-col gap-3 min-w-[320px] min-h-[100px] border p-[20px]">
            <div class="absolute right-[128px] -top-[8px] w-[17px] h-[17px] border border-b-[transparent] border-l-[transparent] -rotate-45"></div>
            <div class="flex gap-[15px]">
              <div class="text-gray-500">Mã voucher</div>:
              <div>A17060129250624</div>
            </div>
            <div class="flex gap-[5px]">
              <div class="text-gray-500">Hạn sử dụng</div>:
              <div>24.01.2024 - 24.02.2024</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="leading-[22px] text-gray-500">Hạn sử dụng: 24.01.2024 - 24.02.2024</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VoucherInfoIcon } from '../icons';
import { ref } from 'vue';
const showDetail = ref(false);
</script>