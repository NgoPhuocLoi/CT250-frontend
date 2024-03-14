<script setup>
import { COUPON_STATUSES } from "@/constants/couponStatus";

const chosenCouponStatus = defineModel();
</script>
<template>
  <ul
    class="h-full px-[20px] w-full flex items-center justify-around mt-8 mb-3 border-b-[0.5px]"
  >
    <li
      v-for="status of COUPON_STATUSES"
      :key="status"
      class="text-lg h-full px-4 flex flex-col justify-center group cursor-pointer"
      @click="chosenCouponStatus = status"
    >
      <span class=""> {{ status }} </span>
      <span
        :class="`w-full  group-hover:bg-red-300 h-[3px] ${
          chosenCouponStatus === status ? 'bg-red-300' : 'bg-transparent'
        }`"
      ></span>
    </li>
  </ul>
</template>
